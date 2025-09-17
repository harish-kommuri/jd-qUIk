import datasets
import pandas as pd

#  websight_dataset = datasets.load_dataset("HuggingFaceM4/WebSight", "v0.2")
# imgtohtml_dataset = datasets.load_dataset("guardiancc/image-to-html")

df = pd.read_json("hf://datasets/guardiancc/image-to-html/image-to-html.json")


print(df.head())