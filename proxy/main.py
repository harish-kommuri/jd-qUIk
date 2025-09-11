from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from proxy.routes.chat_router import chat_router
from proxy.routes.ragc_router import ragc_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# app.include_router(chat_router)
app.include_router(ragc_router)
