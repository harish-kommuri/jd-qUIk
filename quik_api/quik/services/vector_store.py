from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct

from quik.utils.embeddings import create_search_vector

class QdrantStore:
    client: QdrantClient
    collection_name: str = "jd_quik"

    def __init__(self):
        self.client = QdrantClient(host="localhost", port=6333)

    def create_collection(self):
        if not self.client.collection_exists(self.collection_name):
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(size=500, distance=Distance.COSINE),
            )
    
    def upsert(self, vectors):
        self.client.upsert(
            collection_name=self.collection_name,
            points=[
                PointStruct(
                        id=idx,
                        vector=vector.tolist(),
                        payload={"color": "red", "rand_number": idx % 10}
                )
                for idx, vector in enumerate(vectors)
            ]
        )
    
    def search(self, query: str, limit = 5):
        query_vector = create_search_vector(query)

        hits = self.client.search(
            collection_name=self.collection_name,
            query_vector=query_vector,
            limit=limit
        )

        return hits
    
qdrant = QdrantStore()