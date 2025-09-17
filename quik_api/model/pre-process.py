from transformers import AutoModelForCausalLM, AutoTokenizer

from quik.config.constants import img_to_html_model

model = AutoModelForCausalLM.from_pretrained(img_to_html_model, trust_remote_code=True, torch_dtype="auto")  
tokenizer = AutoTokenizer.from_pretrained(img_to_html_model)

model.save_pretrained("./tuned")
tokenizer.save_pretrained("./tuned")

