from fastapi import FastAPI, Request, WebSocket
from fastapi.responses import StreamingResponse
from ollama import AsyncClient
from quik_config.constants import model_selected
import json

app = FastAPI()


async def get_chat_response(id, prompt, websocket: WebSocket):
    messages = [{
        "role": "system",
        "content": "You are a pro in web development nad have a enormous knowledge in React.js. Please give only coding response"
    }, {
        "role": "user",
        "content": prompt
    }]

    async for part in await AsyncClient().chat(model=model_selected, messages=messages, stream=True):
        await websocket.send_text(json.dumps({ "id": id, "type": "part", "value": part['message']['content'] }))

    await websocket.send_text(json.dumps({ "id": id, "type": "end", "value": "" }))

@app.websocket("/chat/{chatid}")
async def chat(
    # chatId: str,
    websocket: WebSocket
):
    await websocket.accept()

    while True:
        data = await websocket.receive_text()
        payload = json.loads(data)

        action = payload.get("action", "")

        if action == "prompt":
            print(data)
            get_chat_response(payload["message"], websocket)

