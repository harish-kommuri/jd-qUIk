from fastapi import FastAPI, WebSocket, Request
from fastapi.middleware.cors import CORSMiddleware
# from ollama import AsyncClient
from quik_config.constants import model_selected, embedding_model

from langchain.chains import RetrievalQA
from langchain_community.vectorstores import FAISS
from langchain_ollama.llms import OllamaLLM
from langchain_huggingface import HuggingFaceEmbeddings

import json
import asyncio
from pathlib import Path

abspath = str(Path.cwd().absolute())
app = FastAPI()
model = OllamaLLM(model=model_selected)
embeddings = HuggingFaceEmbeddings(model_name=embedding_model)

vectorstore = FAISS.load_local(abspath + "/model/RAG/faiss_index", embeddings, allow_dangerous_deserialization=True)
qa = RetrievalQA.from_chain_type(llm=model, retriever=vectorstore.as_retriever())

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# async def get_chat_response(id, prompt, websocket: WebSocket):
#     messages = [{
#         "role": "system",
#         "content": "You are a pro in web development nad have a enormous knowledge in React.js. Please give only coding response"
#     }, {
#         "role": "user",
#         "content": prompt
#     }]

#     async for part in await AsyncClient().chat(model=model_selected, messages=messages, stream=True):
#         partvalue = part['message']['content']
#         await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": partvalue }))

#     await websocket.send_text(json.dumps({ "id": id, "type": "end", "value": "" }))

async def get_chat_response(id, prompt, websocket: WebSocket):
    # messages = [{
    #     "role": "system",
    #     "content": "You are a pro in web development nad have enormous knowledge in React.js. Please give only coding response"
    # }, {
    #     "role": "user",
    #     "content": prompt
    # }]

    query = f"You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Please give only coding response. \n {prompt}"

    async for partvalue in qa.astream():
        await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": partvalue }))

    # async for part in await AsyncClient().chat(model=model_selected, messages=messages, stream=True):
    #     partvalue = part['message']['content']
    #     await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": partvalue }))

    await websocket.send_text(json.dumps({ "id": id, "type": "end", "value": "" }))

@app.post("/_chat/{chatid}")
async def xhr_chat(
    # chatid: str,
    request: Request
):
    body = await request.json()
    text = body.get("text", None)

    print("text ---> ", text)

    llm_resp = qa.invoke(f"You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Please give only coding response. \n {text}")

    return {"error": 0, "message": "Success", "data": llm_resp }


@app.websocket("/chat/{chatid}")
async def chat(
    # chatid: str,
    websocket: WebSocket
):
    try:
        await websocket.accept()

        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            action = payload.get("action", "")

            if action == "prompt":
                asyncio(get_chat_response(payload["msgId"], payload["message"], websocket))
    
    except Exception as e:
        print("Error in chat API", e)
        return {}
