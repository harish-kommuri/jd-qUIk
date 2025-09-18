from pathlib import Path
from uuid import uuid4
import requests
import os
from tqdm import tqdm

import torch
import pyarrow.parquet as pq


cwd = str(Path.cwd())

try:
    dataset_url = "https://huggingface.co/datasets/HuggingFaceM4/WebSight/resolve/main/v0.2/train-00010-of-00738-4dca33e27cbd5c4f.parquet?download=true"
    filepath = cwd + "/datasets/" + str(uuid4()) + ".parquet"

    response = requests.get(dataset_url, stream=True)

    with open(filepath, "wb") as handle:
        for data in tqdm(response.iter_content(chunk_size=1024), unit="mB"):
            handle.write(data)
    handle.close()

    df = pq.read_table(filepath)
    # print(df.to)
except Exception as e:
    print("Exception while training", e)

finally:
    if os.path.exists(filepath):
        os.remove(filepath)




# from transformers import AutoModelForCausalLM, AutoTokenizer


# img_to_html_model="HuggingFaceM4/VLM_WebSight_finetuned"

# model = AutoModelForCausalLM.from_pretrained(img_to_html_model, trust_remote_code=True, dtype=torch.float16)  
# tokenizer = AutoTokenizer.from_pretrained(img_to_html_model)

# model.save_pretrained("./tuned")
# tokenizer.save_pretrained("./tuned")

