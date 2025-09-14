from fastapi import Form, UploadFile, File
from fastapi.routing import APIRouter

# import faiss
# import pickle
# import os
# import requests
# import base64

# from typing import Annotated
from uuid import uuid4

# from pathlib import Path
from quik.controllers.ragc_controller import text_prompt_handler, image_prompt_handler

# model_abspath = str(Path.cwd().absolute()) + "/quik/model/RAGC"
# index = faiss.read_index(model_abspath + "/faiss/index.faiss")
# chunks = []

# with open(model_abspath + "/faiss/chunks.pkl", 'rb') as file:
#     chunks = pickle.load(file)

ragc_router = APIRouter(
    prefix="/ragc"
)

@ragc_router.post("/{chatid}")
async def xhr_chat(
    chatid: str,
    type: str = Form(default="text"),
    query: str = Form(default=None),
    img: UploadFile = File
):
    if type == "text":
        if query == None:
            return { "answer": "", "ok": 0, "msg": "Please provide a query." }

        answer = text_prompt_handler(chatid, query)
        return { "answer": answer, "ok": 1 }
    elif type == "image":
        resp = await image_prompt_handler(chatid, img, query)
        return { "answer": resp, "ok": 1 }
    else:
        return { "answer": None, "msg": "Invalid type given", "ok": 0 }


# @ragc_router.post("/{chatid}/xhr_to_gpu")
# async def xhr_to_gpu(
#     chatid: str,
#     type: str = Form(default="text"),
#     query: str = Form(default=None),
#     img: UploadFile = File(...)
# ):
#     if type == "text":
#         if query == None:
#             return { "answer": "", "ok": 0, "msg": "Please provide a query." }

#     gpu_server_api = "http://103.42.50.110:5005/v1/chat/completions"

#     payload = [
#         create_prompt_object("system", {
#             "content": "You are a precise HTML/CSS generator.\n\nOutput requirements (strict):\n- Return ONLY coding blocks in response."
#         })
#     ]

#     if img != None:
#         # file_content = await img.read()
#         # encoded_content = base64.base64encode(file_content)

#         payload.append(
#             create_prompt_object("user", {
#                 "content": f"""
#                     Analyse the image attached, find the web components and structure of the tempate and give response according to that.
#                     Question: {query or "Please convert image to html"}
#                     """,
#                 "images": ["https://images01.nicepagecdn.com/page/75/44/html-template-preview-754416.jpg"]
#             })
#         )        
#     else:
#         payload.append(
#             create_prompt_object("user", {
#                 "content": get_prompt(query)
#             })
#         )
    
    
#     resp = requests.post(gpu_server_api, json={
#         "data": {
#             "model": gpu_server_llm,
#             "messages": payload
#         }
#     })

#     print(resp.text)

#     return { "ok": 1, "msg": "Success", "answer": "" }