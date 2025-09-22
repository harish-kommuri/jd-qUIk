import torch
import transformers
from PIL import Image
from pathlib import Path
from transformers import AutoProcessor, AutoConfig, AutoModelForCausalLM, pipeline
import os

os.environ["DISABLE_FLASH_ATTN"] = "1"


# from quik.config.constant s import img_to_html_model

# img_to_html_model = str(Path.cwd()) + "/model/microsoft/phi-3.5-vision-instruct"
# img_to_html_model = "HuggingFaceM4/VLM_WebSight_finetuned"
img_to_html_model = "microsoft/Phi-3-vision-128k-instruct"
# img_to_html_model = "unsloth/Llama-3.2-11B-Vision"

# device = torch.device("mps" if torch.mps.is_available() else "cpu")
# config = AutoConfig.from_pretrained(img_to_html_model, trust_remote_code=True)
# processor = AutoProcessor.from_pretrained(img_to_html_model, trust_remote_code=True)

# model = AutoModelForCausalLM.from_pretrained(
#     img_to_html_model,
#     config=config,
#     attn_implementation="eager",
#     trust_remote_code=True
# ).to(device)

# model.config.use_cache = False


# def image_to_html(filepath: str, prompt: str = ""):
#     image = Image.open(filepath).convert("RGB")
#     full_prompt = f"<|user|>\n<|image_1|>\nConvert this image to HTML.<|end|>\n<|assistant|>\n"

#     inputs = processor(text=full_prompt, images=[image], return_tensors="pt")
#     print(33, inputs)

#     # for key in ['image_attention_mask', 'pixel_values', 'aspect_ratio_ids', 'aspect_ratio_mask']:
#     #     if key in inputs:
#     #         del inputs[key]

#     outputs = model.generate(
#         **inputs,
#         max_new_tokens=200
#         # do_sample=False,
#         # use_cache=False,      # ← helps avoid some MPS bugs
#         # pad_token_id=processor.tokenizer.pad_token_id or processor.tokenizer.eos_token_id,
#     )

#     print(outputs)
#     image.close()

#     return processor.batch_decode(outputs, skip_special_tokens=True, clean_up_tokenization_spaces=False)

pipe = pipeline("text-generation", model=img_to_html_model, trust_remote_code=True, attn_implementation="eager")

def image_to_html(filepath: str, prompt: str = ""):
    image = Image.open(filepath).convert("RGB")
    messages = [
        {"role": "user", "content": prompt, "image": image },
    ]

    # for key in ['image_attention_mask', 'pixel_values', 'aspect_ratio_ids', 'aspect_ratio_mask']:
    #     if key in inputs:
    #         del inputs[key]

    outputs = pipe(messages)

    print(outputs)
    image.close()

    return outputs
