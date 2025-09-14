from sentence_transformers import SentenceTransformer

from quik.config.constants import embedding_model

embedder = SentenceTransformer(embedding_model)  # lightweight & good


def create_search_vector(query: str):
    query_embedding = embedder.encode([query])
    return query_embedding
