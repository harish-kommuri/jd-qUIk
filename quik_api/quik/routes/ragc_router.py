from fastapi import Form, UploadFile, File
from fastapi.routing import APIRouter
from sentence_transformers import SentenceTransformer

import faiss
import ollama
import pickle
import os
import requests
import base64

# from typing import Annotated
from uuid import uuid4

from pathlib import Path
from quik.config.constants import embedding_model, llm_model, llm_vision_model, gpu_server_llm
from quik.utils.prompt_objects import create_prompt_object

model_abspath = str(Path.cwd().absolute()) + "/quik/model/RAGC"
embedder = SentenceTransformer(embedding_model)  # lightweight & good
index = faiss.read_index(model_abspath + "/faiss/index.faiss")
chunks = []

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
        create_prompt_object("system", {
            "content": "You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Output requirements (strict): only coding blocks in response.",
            "type": "ollama"
        }),
        create_prompt_object("user", {
            "content": prompt,
            "type": "ollama"
        })
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


async def image_handling(file: UploadFile, query: str):
    tempname = str(uuid4()) + "_" + file.filename
    # filepath = uploads_path + "/" + tempname
    llm_resp = ""

    try:
        file_content = await file.read()
        encoded_content = base64.b64encode(file_content)

        response = ollama.chat(model=llm_vision_model, messages=[
            create_prompt_object("system", {
                "content": "You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Output requirements (strict): only coding blocks in response.",
                "type": "ollama"
            }),
            create_prompt_object("user", {
                "content": f"""
                "Analyse the image attached, find the web components and structure of the tempate and give response according to that."

                Question: {query or "Please convert image to html"}
                """,
                "images": [encoded_content],
                "type": "ollama"
            })
        ])

        llm_resp = response
    except Exception as e:
        print("Error while reading image", e)
    finally:
        pass
        # if os.path.exists(filepath):
            # os.remove(filepath)

    return llm_resp


@ragc_router.post("/{chatid}")
async def xhr_chat(
    type: str = Form(default="text"),
    query: str = Form(default=None),
    img: UploadFile = File
):
    if type == "text":
        if query == None:
            return { "answer": "", "ok": 0, "msg": "Please provide a query." }
        
        answer = rag_pipeline_text(query)
        return { "answer": answer, "ok": 1 }
    elif type == "image":
        resp = await image_handling(img, query)
        return { "answer": resp, "ok": 1 }
    else:
        return { "answer": None, "msg": "Invalid type given", "ok": 0 }

@ragc_router.post("/{chatid}/xhr_to_gpu")
async def xhr_to_gpu(
    chatid: str,
    type: str = Form(default="text"),
    query: str = Form(default=None),
    img: UploadFile = File(...)
):
    if type == "text":
        if query == None:
            return { "answer": "", "ok": 0, "msg": "Please provide a query." }

    gpu_server_api = "http://103.42.50.110:5005/v1/chat/completions"

    payload = [
        create_prompt_object("system", {
            "content": "You are a precise HTML/CSS generator.\n\nOutput requirements (strict):\n- Return ONLY coding blocks in response."
        })
    ]

    if img != None:
        # file_content = await img.read()
        # encoded_content = base64.base64encode(file_content)

        payload.append(
            create_prompt_object("user", {
                "content": f"""
                    Analyse the image attached, find the web components and structure of the tempate and give response according to that.
                    Question: {query or "Please convert image to html"}
                    """,
                "images": ["https://images01.nicepagecdn.com/page/75/44/html-template-preview-754416.jpg"]
            })
        )        
    else:
        payload.append(
            create_prompt_object("user", {
                "content": get_prompt(query)
            })
        )
    
    
    resp = requests.post(gpu_server_api, json={
        "data": {
            "model": gpu_server_llm,
            "messages": payload
        }
    })

    print(resp.text)

    return { "ok": 1, "msg": "Success", "answer": "" }