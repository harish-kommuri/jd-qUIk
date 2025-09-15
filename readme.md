RAG based to generative model to respond to Web development context.

### Model picked for generate code from Prompt
qwen3-coder:32b

### Model picked for generation code from images (Vision model)
llama-vision

### RAG components:
Embedding model -> "all-MiniLM-L6-v2" (Most popular till the day)
Vector Store    -> Qdrent (https://qdrant.tech/documentation/quickstart)
Generative Model -> 

### Containerization:
```// Make sure docker installed
    docker compose build```

### Login with Root / Admin Zeplin account (Who has access to all the Zeplin projects and screens)
https://api.zeplin.dev/v1/oauth/authorize?client_id=68c782041204c7952a1e382f&redirect_uri=http://localhost:3000/zeplin/login-redirect