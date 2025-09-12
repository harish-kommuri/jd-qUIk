from fastapi import Form, UploadFile, File
from fastapi.routing import APIRouter
from sentence_transformers import SentenceTransformer

import faiss
import ollama
import pickle
import shutil
import os

from typing import Annotated
from uuid import uuid4

from pathlib import Path
from quik_config.constants import embedding_model, llm_model

model_abspath = str(Path.cwd().absolute()) + "/model/RAGC"
embedder = SentenceTransformer(embedding_model)  # lightweight & good
index = faiss.read_index(model_abspath + "/faiss/index.faiss")
uploads_path = str(Path.cwd()) + "/uploads"
chunks = []

if not os.path.exists(uploads_path):
    os.mkdir(uploads_path)

with open(model_abspath + "/faiss/chunks.pkl", 'rb') as file:
    chunks = pickle.load(file)

ragc_router = APIRouter(
    prefix="/ragc"
)

def retrieve(query, k=3):
    query_embedding = embedder.encode([query])
    _, indices = index.search(query_embedding.astype('float32'), k)
    return [chunks[i] for i in indices[0]]


def generate_answer(prompt):
    response = ollama.chat(model=llm_model, messages=[
        {
            "role": "system",
            "content": "You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Please give only coding response."
        },
        {
            "role": "user",
            "content": prompt
        }
    ])

    return response['message']['content']

def get_prompt(question: str):
    # Retrieve relevant context
    retrieved_chunks = retrieve(question)
    context = "\n\n".join(retrieved_chunks)

    # Build prompt
    prompt = f"""
    {context}

    Question: {question}
    """
    return prompt


def rag_pipeline_text(question):
    prompt = get_prompt(question)
    # Generate answer
    answer = generate_answer(prompt)
    return answer


def image_handling(file: UploadFile, query: str):
    tempname = str(uuid4()) + "_" + file.filename
    filepath = uploads_path + "/" + tempname
    llm_resp = ""

    try:
        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        response = ollama.chat(model=llm_model, messages=[
            {
                "role": "system",
                "content": "You are a pro at analysing images and best at describing images."
            },
            {
                "role": "user",
                "content": get_prompt(query),
                "images": [filepath]
            }
        ])

        llm_resp = response
        print(94, llm_resp)
    except Exception as e:
        print("Error while reading image", e)
    finally:
        if os.path.exists(filepath):
            os.remove(filepath)

    return llm_resp


@ragc_router.post("/{chatid}")
async def xhr_chat(
    type: str = Form(default="text"),
    query: str = Form(default=None),
    img: Annotated[UploadFile | None, File()] = None
):
    if type == "text":
        if query == None:
            return { "answer": "", "ok": 0, "message": "Please provide a query." }
        
        answer = rag_pipeline_text(query)
        return { "answer": answer, "ok": 1 }
    elif type == "image":
        resp = image_handling(img, query)
        return { "answer": resp, "ok": 1 }
    else:
        return { "answer": None, "message": "Invalid type given", "ok": 0 }