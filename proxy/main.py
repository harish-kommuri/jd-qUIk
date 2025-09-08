from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from ollama import AsyncClient
from quik_config.constants import model_selected
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def get_chat_response(id, prompt, websocket: WebSocket):
    messages = [{
        "role": "system",
        "content": "You are a pro in web development nad have a enormous knowledge in React.js. Please give only coding response"
    }, {
        "role": "user",
        "content": prompt
    }]

    async for part in await AsyncClient().chat(model=model_selected, messages=messages, stream=True):
        partvalue = part['message']['content']
        await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": partvalue }))

    await websocket.send_text(json.dumps({ "id": id, "type": "end", "value": "" }))


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
                await get_chat_response(payload["msgId"], payload["message"], websocket)
    
    except Exception as e:
        print("Error in chat API", e)
        return {}
