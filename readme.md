RAG based to respond based on context of requirement.

Model picked for generate code from Prompt
https://ollama.com/library/qwen3-coder

Model picked for generation code from images (Vision model)


RAG components:

Embedding model -> "all-MiniLM-L6-v2" (Most popular till the day)
Vector Store    -> Qdrent (https://qdrant.tech/documentation/quickstart)


Containerization:

Running Qdrent locally:

docker pull qdrant/qdrant
docker run -p 6333:6333 -p 6334:6334 \
    -v "$(pwd)/quik_qdrant:/qdrant/storage:z" \
    qdrant/qdrant


