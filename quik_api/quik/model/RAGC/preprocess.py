from pathlib import Path
import os
import numpy as np

import faiss
import pickle

from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain_huggingface import HuggingFaceEmbeddings
from sentence_transformers import SentenceTransformer

if not os.path.exists("faiss"):
    os.mkdir("faiss")
# from quik_config.constants import embedding_model

embedding_model = "all-MiniLM-L6-v2"

embedder = SentenceTransformer(embedding_model)
texts_folder_path = str(Path.joinpath(Path.cwd(), "data/qwen-docs/txts"))
texts = os.listdir(texts_folder_path)


def extract_text_from_file(filepath):
    print("Reading File ------> ", filepath)

    with open(filepath, "rb") as txtfile:
        return txtfile.read().decode('utf-8')

# def chunk_text(text, chunk_size=500, overlap=50):
#     chunks = []
#     start = 0
#     while start < len(text):
#         end = min(start + chunk_size, len(text))
#         chunks.append(text[start:end])
#         start += chunk_size - overlap
#     return chunks

split_docs = []

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)

for txtfilename in texts:
    if txtfilename.endswith(".txt"):
        textfile = texts_folder_path + "/" + txtfilename
        txt = extract_text_from_file(textfile)

        chunks = splitter.split_text(txt)
        split_docs.extend(chunks)

embeddings = embedder.encode(split_docs)

dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(embeddings))

faiss.write_index(index, "faiss/index.faiss")

with open("faiss/chunks.pkl", "wb") as f:
    pickle.dump(split_docs, f)

print("Pre-processed successfully ... :)")