from trl import SFTConfig, SFTTrainer
from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen3-Coder-30B-A3B-Instruct")
model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-Coder-30B-A3B-Instruct")


# from typing import Dict

# from uigc_constants import models_list, model_selected

# # model: Dict[str, ]


# model_config = models_list[model_selected]


# rainer = SFTTrainer(
#   model=model_config["modelpath"]
# )

# # trainer.save_model()