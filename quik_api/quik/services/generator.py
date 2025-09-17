import torch

from PIL import Image
from transformers import AutoModelForCausalLM, AutoProcessor

from transformers.image_utils import to_numpy_array, PILImageResampling, ChannelDimension
from transformers.image_transforms import resize, to_channel_dimension_format


from quik.config.constants import img_to_html_model

PROCESSOR = AutoProcessor.from_pretrained(
    img_to_html_model
)
MODEL = AutoModelForCausalLM.from_pretrained(
    img_to_html_model,
    trust_remote_code=True,
    dtype=torch.bfloat16,
)

print(PROCESSOR)
print(PROCESSOR.__class__)

def image_to_html(filepath: str, prompt: str = ""):
    image = Image.open(filepath).convert("RGB")

    inputs = PROCESSOR(text=prompt, images=[image], return_tensors="pt")
    print(inputs['image_attention_mask'])

    if "image_attention_mask" in inputs:
        del inputs['image_attention_mask']

    outputs = MODEL.generate(**inputs, max_new_tokens=50)
    image.close()

    return PROCESSOR.batch_decode(outputs, skip_special_tokens=True)
