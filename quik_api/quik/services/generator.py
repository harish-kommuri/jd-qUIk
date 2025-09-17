import torch

from PIL import Image
from pathlib import Path
from transformers import AutoModelForCausalLM, AutoProcessor

# from quik.config.constant s import img_to_html_model

img_to_html_model = str(Path.cwd()) + "/model/tuned"
device = "mps"

PROCESSOR = AutoProcessor.from_pretrained(
    img_to_html_model
)

MODEL = AutoModelForCausalLM.from_pretrained(
    img_to_html_model,
    trust_remote_code=True,
    dtype=torch.float16,
    device_map=device,
    attn_implementation="eager"
)

def image_to_html(filepath: str, prompt: str = ""):
    image = Image.open(filepath)
    full_prompt = f"<image>\nUSER: {prompt}\nASSISTANT:"

    inputs = PROCESSOR(text=full_prompt, images=image, return_tensors="pt").to(device)
    print(inputs['image_attention_mask'])

    if "image_attention_mask" in inputs:
        del inputs['image_attention_mask']

    print(inputs.keys())

    outputs = MODEL.generate(
        **inputs,
        max_new_tokens=50,
        do_sample=False,
        use_cache=False,      # ← helps avoid some MPS bugs
        pad_token_id=PROCESSOR.tokenizer.pad_token_id or PROCESSOR.tokenizer.eos_token_id,
    )

    print(outputs)

    image.close()

    return PROCESSOR.batch_decode(outputs, skip_special_tokens=True)
