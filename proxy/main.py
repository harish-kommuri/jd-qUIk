from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List
import websockets

app = FastAPI()

class ConnectionManager:
    def __init__(self):
        self.client_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.client_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.client_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

manager = ConnectionManager()

def handle_receiving(websocket: WebSocket):
    while True:
        data

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: str):
    await manager.connect(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_personal_message(f"You wrote: {data}", websocket)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
