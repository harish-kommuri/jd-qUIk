# from transformers import AutoTokenizer, AutoModelForCausalLM, TrainingArguments, Trainer
# from peft import LoraConfig, get_peft_model
# import torch
from pathlib import Path
import os

model_path = str(Path.cwd()) + "/finetuned"
os.environ["KAGGLE_HUB_CACHE_DIR"] = model_path

print(model_path)

# model_name = "microsoft/Phi-4-multimodal-instruct"
# tokenizer = AutoTokenizer.from_pretrained(model_name)
# tokenizer.pad_token = tokenizer.eos_token  # Important for causal LM

# # def tokenize_function(examples):
# #     return tokenizer(
# #         examples["text"],
# #         truncation=True,
# #         padding="max_length",
# #         max_length=512,
# #         return_special_tokens_mask=False,
# #     )

# # tokenized_dataset = dataset.map(
# #     tokenize_function,
# #     batched=True,
# #     remove_columns=["text", "metadata"]  # remove raw columns to save memory
# # )

# # Load model
# model = AutoModelForCausalLM.from_pretrained(
#     model_name,
#     dtype=torch.float16,
#     device_map="auto",
#     trust_remote_code=True,
#     attn_implementation="eager"
# )

# model.save_pretrained(model_path)
# tokenizer.save_pretrained(model_path)


import kagglehub

path = kagglehub.model_download("Microsoft/phi-3/pyTorch/phi-3.5-vision-instruct", )

print("Path to model files:", path)