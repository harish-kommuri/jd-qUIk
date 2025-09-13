from fastapi import Request, Form, UploadFile
from fastapi.routing import APIRouter
from fastapi.responses import StreamingResponse

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_ollama.llms import OllamaLLM
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

import json
import asyncio
from pathlib import Path
from typing import Dict
from queue import Queue

from quik_config.constants import llm_model, embedding_model

abspath = str(Path.cwd().absolute())
embeddings = HuggingFaceEmbeddings(model_name=embedding_model)
vectorstore = FAISS.load_local(abspath + "/model/RAG/faiss_index", embeddings, allow_dangerous_deserialization=True)
llm = OllamaLLM(model=llm_model)
# qa = RetrievalQA.from_chain_type(llm=model, retriever=vectorstore.as_retriever())

chat_queues: Dict[str, Queue] = {}

chat_router = APIRouter(
    prefix="/chat"
)

# async def get_chat_response(id, prompt, websocket: WebSocket):
#     messages = [{
#         "role": "system",
#         "content": "You are a pro in web development nad have a enormous knowledge in React.js. Please give only coding response"
#     }, {
#         "role": "user",
#         "content": prompt
#     }]

#     async for part in await AsyncClient().chat(model=llm_model, messages=messages, stream=True):
#         partvalue = part['message']['content']
#         await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": partvalue }))

#     await websocket.send_text(json.dumps({ "id": id, "type": "end", "value": "" }))

async def create_stream(id: str):
    q = chat_queues.get(id, None)

    if not isinstance(q, asyncio.Queue) or q.is_shutdown():
        q = asyncio.Queue()
    
    chat_queues[id] = q

    try:
        while True:
            # if await request.is_disconnected():
            #     break

            message = await asyncio.wait_for(q.get(), timeout=15.0)
            print("Message ---> ", message)
            yield f"data: {json.dumps(message)}\n\n"
    except asyncio.TimeoutError:
        yield ": keep-alive\n\n"
    except Exception as e:
        print("Error while processing queue.", e)
    
    finally:
        if id in chat_queues:
            del chat_queues[id]
    


async def get_llm_response(id, msgid, prompt):
    # messages = [{
    #     "role": "system",
    #     "content": "You are a pro in web development nad have enormous knowledge in React.js. Please give only coding response"
    # }, {
    #     "role": "user",
    #     "content": prompt
    # }]

    query = f"You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Please give only coding response. \n {prompt}"
    queue = chat_queues[id]

    # async for partvalue in qa.astream(query):
    #     result = partvalue.get("result", "")
    #     print(89, result)
    #     await queue.put({ "id": id, "msgid": msgid, "type": "part", "value": result })
    #     # await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": result }))
    
    # await queue.put({ "id": id, "msgid": msgid, "type": "end", "value": "" })

    # async for part in await AsyncClient().chat(model=llm_model, messages=messages, stream=True):
    #     partvalue = part['message']['content']
    #     await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": partvalue }))

    # await websocket.send_text(json.dumps({ "id": id, "type": "end", "value": "" }))


@chat_router.post("/synchronous/{chatid}")
async def xhr_chat(
    chatid: str,
    type: str = Form(default="text"),
    value: str | UploadFile = Form(...)
):
    memory = ConversationBufferMemory(
        memory_key="chat_history",  # important: key used in prompt
        return_messages=True       # keep as message objects, not string
    )

    qa = ConversationalRetrievalChain.from_llm(
        llm,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )

    if type == "text":
        question = f"You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Please give only coding response. \n {value}"
        # question = """Given the following conversation and a follow-up question, 
        # answer the question. If you don't know, say "I don't know".

        # Chat History: {""" + chatid + """}

        # Follow Up Input: {""" + q + """}
        # Standalone question:"""

        llm_resp = qa.invoke({ "question": question })
        result = llm_resp.get("answer", "")

        if len(result) > 0:
            return {"error": 0, "message": "Success", "data": result }
        else:
            return {"error": 1, "message": "Failed", "data": "" }
    else:
        pass

@chat_router.get("/sse/{chatid}")
async def chat(
    chatid: str,
    # request: Request
):
    try:
        return StreamingResponse(
            create_stream(chatid),
            media_type="text/event-stream"
        )
    except Exception as e:
        print("Error in sse/chat API", e)


@chat_router.post("/sse/{chatid}/prompt/{msgid}")
async def prompt(
    chatid: str,
    msgid: str,
    request: Request
):
    body = await request.json()
    text = body.get("text", "")

    await get_llm_response(chatid, msgid, text)

    return {}