from pathlib import Path
import os
import numpy as np
from PyPDF2 import PdfReader

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
pdf_folder_path = str(Path.joinpath(Path.cwd(), "data"))
pdfs = os.listdir(pdf_folder_path)


def extract_text_from_pdf(pdf_path):
    print("Reading PDF ------> ", pdf_path)
    reader = PdfReader(pdf_path)
    text = ""
    for page_num in range(len(reader.pages)):
        text += reader.pages[page_num].extract_text()
    return text

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

for pdfname in pdfs:
    if pdfname.endswith(".pdf"):
        pdfpath = pdf_folder_path + "/" + pdfname
        pdf_text = extract_text_from_pdf(pdfpath)

        chunks = splitter.split_text(pdf_text)
        split_docs.extend(chunks)

# chunks = [d.page_content for d in split_docs]
embeddings = embedder.encode(split_docs)

dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(embeddings))

faiss.write_index(index, "faiss/index.faiss")

with open("faiss/chunks.pkl", "wb") as f:
    pickle.dump(split_docs, f)


print("Pre-processed successfully ... :)")