from trl import SFTConfig, SFTTrainer
from datasets import load_dataset
# from typing import Dict

# model: Dict[str, ]

models = {
    "exaone-deep": {
        "modelpath": "LGAI-EXAONE/EXAONE-Deep-7.8B",
    },
    "deepseek-coder": {
        "modelpath": "deepseek-ai/DeepSeek-Coder-V2-Base"
    }
}

model_selected = "deepseek-coder"

model_config = models[model_selected]


trainer = SFTTrainer(
    model=model_config["modelpath"]
)