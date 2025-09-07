from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from ollama import AsyncClient
from quik_config.constants import model_selected


app = FastAPI()


async def get_chat_response(messages):
    async for part in await AsyncClient().chat(model=model_selected, messages=messages, stream=True):
        yield f"data: part['message']['content']\n\n"
    
    yield f"data: ***done***\n\n"


@app.post("/chat/:chatid")
async def chat(
    # chatId: str,
    request: Request
):
    input = await request.json()
    text = input.get("text", None)

    if text is None:
        return f"data: ***done***\n\n"

    messages = [{
        "role": "system",
        "content": "You are a pro in web development nad have a enormous knowledge in React.js. Please give only coding response"
    }, {
        "role": "user",
        "content": text
    }]

    return StreamingResponse(
        get_chat_response(messages=messages),
        "text/event-stream"
    )


