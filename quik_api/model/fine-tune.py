from pathlib import Path
from uuid import uuid4
import pandas as pd
import requests
import os
from tqdm import tqdm

import torch
import pyarrow.parquet as pq


cwd = str(Path.cwd())

print(cwd)

datasets = [{
    "title": "train-00000-of-00071-eb722b04b83e13b7.parquet",
    "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00000-of-00071-eb722b04b83e13b7.parquet?download=true",
    "size": "438 MB"
}, {
    "title": "train-00001-of-00071-df5cc75986b4e6ff.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00001-of-00071-df5cc75986b4e6ff.parquet?download=true",
    "size": "443 MB"
}, {
    "title": "train-00002-of-00071-9d21c8aebfdd8330.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00002-of-00071-9d21c8aebfdd8330.parquet?download=true",
    "size": "438 MB"
}, {
    "title": "train-00003-of-00071-83f53528b74fb44b.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00003-of-00071-83f53528b74fb44b.parquet?download=true",
    "size": "439 MB"
}, {
    "title": "train-00004-of-00071-bfbc2f1f2948d57f.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00004-of-00071-bfbc2f1f2948d57f.parquet?download=true",
    "size": "443 MB"
}, {
    "title": "train-00005-of-00071-0c56bff1917d8e38.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00005-of-00071-0c56bff1917d8e38.parquet?download=true",
    "size": "451 MB"
}, {
    "title": "train-00006-of-00071-fd095993e12f047d.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00006-of-00071-fd095993e12f047d.parquet?download=true",
    "size": "451 MB"
}, {
    "title": "train-00007-of-00071-fc9a17a7ca1d1339.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00007-of-00071-fc9a17a7ca1d1339.parquet?download=true",
    "size": "442 MB"
}, {
    "title": "train-00008-of-00071-a5075d54a01fe126.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00008-of-00071-a5075d54a01fe126.parquet?download=true",
    "size": "441 MB"
}, {
    "title": "train-00009-of-00071-54f26a2d18f9ff73.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00009-of-00071-54f26a2d18f9ff73.parquet?download=true",
    "size": "439 MB"
}, {
    "title": "train-00010-of-00071-7c89af7fb68feb34.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00010-of-00071-7c89af7fb68feb34.parquet?download=true",
    "size": "440 MB"
}, {
    "title": "train-00011-of-00071-20632198348587e3.parquet",
    # "downloadLink": "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/data/train-00011-of-00071-20632198348587e3.parquet?download=true",
    "size": "439 MB"
}]

try:
    # dataset_url = "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/v0.2/train-00010-of-00738-4dca33e27cbd5c4f.parquet?download=true"
    # filepath = cwd + "/datasets/" + str(uuid4()) + ".parquet"
    filepath = cwd + "/datasets/train-00000-of-00071-eb722b04b83e13b7.parquet"

    df = pd.read_parquet(filepath)

    df.head()


    # response = requests.get(dataset_url, stream=True)

    # with open(filepath, "wb") as handle:
    #     for data in tqdm(response.iter_content(chunk_size=1024), unit="mB"):
    #         handle.write(data)
    # handle.close()

    # df = pq.read_table(filepath)
    # print(df.to)
except Exception as e:
    print("Exception while training", e)

# finally:
#     if os.path.exists(filepath):
#         os.remove(filepath)




# from transformers import AutoModelForCausalLM, AutoTokenizer


# img_to_html_model="HuggingFaceM4/VLM_WebSight_finetuned"

# model = AutoModelForCausalLM.from_pretrained(img_to_html_model, trust_remote_code=True, dtype=torch.float16)  
# tokenizer = AutoTokenizer.from_pretrained(img_to_html_model)

# model.save_pretrained("./tuned")
# tokenizer.save_pretrained("./tuned")

