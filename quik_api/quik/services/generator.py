import torch

from PIL import Image
from pathlib import Path
from transformers import AutoModelForCausalLM, AutoProcessor, AutoConfig
import os
os.environ["DISABLE_FLASH_ATTN"] = "1"


# from quik.config.constant s import img_to_html_model

# img_to_html_model = str(Path.cwd()) + "/model/microsoft/phi-3.5-vision-instruct"
# img_to_html_model = "HuggingFaceM4/VLM_WebSight_finetuned"
img_to_html_model = "microsoft/Phi-4-multimodal-instruct"

device = torch.device("mps")
auto_config = AutoConfig.from_pretrained(img_to_html_model, trust_remote_code=True)

processor = AutoProcessor.from_pretrained(
    img_to_html_model
)


print(auto_config)

model = AutoModelForCausalLM.from_pretrained(
    auto_config,
    attn_implementation="eager",
    trust_remote_code=True
).to(device)

def image_to_html(filepath: str, prompt: str = ""):
    image = Image.open(filepath)
    full_prompt = f"<image>\nUSER: {prompt}\nASSISTANT:"

    inputs = processor(text=full_prompt, images=image, return_tensors="pt").to(device)
    print(inputs['image_attention_mask'])

    if "image_attention_mask" in inputs:
        del inputs['image_attention_mask']

    print(inputs.keys())

    outputs = model.generate(
        **inputs,
        max_new_tokens=50,
        do_sample=False,
        use_cache=False,      # ← helps avoid some MPS bugs
        pad_token_id=processor.tokenizer.pad_token_id or processor.tokenizer.eos_token_id,
    )

    print(outputs)

    image.close()

    return processor.batch_decode(outputs, skip_special_tokens=True)
