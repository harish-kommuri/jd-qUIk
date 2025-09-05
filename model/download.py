# # from uigc_constants import models_list, model_selected

# from huggingface_hub import hf_hub_download


# models_list = {
#     "exaone-deep": {
#         "modelpath": "LGAI-EXAONE/EXAONE-Deep-7.8B",
#     },
#     "deepseek-coder": {
#         "modelpath": "deepseek-ai/DeepSeek-Coder-V2-Base"
#     },
#     "qwen3-coder": {
#         "modelpath": "Qwen/Qwen3-Coder-30B-A3B-Instruct"
#     }
# }

# model_selected = "qwen3-coder"


# hf_hub_download(repo_id=model_selected, filename="config.json")



import kagglehub


path = kagglehub.model_download("qwen-lm/qwen3-coder/transformers/30b-a3b-instruct")


print("Model saved to ", path)