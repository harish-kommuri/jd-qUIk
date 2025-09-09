from pathlib import Path
import os
from PyPDF2 import PdfReader

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

pdf_folder_path = str(Path.joinpath(Path.cwd(), "data"))
pdfs = os.listdir(pdf_folder_path)

print(pdf_folder_path)

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page_num in range(reader.pages):
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


for pdfname in pdfs:
    pdfpath = pdf_folder_path + "/" + pdfname
    pdf_text = extract_text_from_pdf(pdfpath)

    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    chunks = splitter.create_documents([pdf_text])

    vectorstore = FAISS.from_documents(chunks, embeddings)
    vectorstore.save_local("faiss_index")




# text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=30)
# docs = text_splitter.split_documents(documents=documents)

    