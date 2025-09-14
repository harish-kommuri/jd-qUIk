from quik.services.vector_store import qdrant

def get_prompt(question: str):
    retrieved_chunks = qdrant.search(question)
    print(retrieved_chunks)

    context = "\n\n".join(retrieved_chunks)

    # Build prompt
    prompt = f"""
    {context}

    Question: {question}
    """
    return prompt
