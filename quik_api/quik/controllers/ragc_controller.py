from uuid import uuid4
from pathlib import Path
import os

from fastapi import UploadFile
import ollama

from quik.utils.prompt_objects import create_prompt_object
from quik.services.prompt import get_prompt
from quik.config.constants import llm_model, llm_vision_model

uploads_path = str(Path.absolute(Path.cwd())) + "/uploads"

if not os.path.exists(uploads_path):
    os.mkdir(uploads_path)

def generate_answer(prompt):
    response = ollama.chat(model=llm_model, messages=[
        create_prompt_object("system", {
            "content": "You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Output requirements (strict): only coding blocks in response."
        }),
        create_prompt_object("user", {
            "content": prompt
        })
    ])

    return response['message']['content']


def text_prompt_handler(question):
    prompt = get_prompt(question)
    answer = generate_answer(prompt)
    return answer


async def image_prompt_handler(file: UploadFile, query: str):
    tempname = str(uuid4()) + "_" + file.filename
    filepath = uploads_path + "/" + tempname
    llm_resp = ""

    try:
        with open(filepath, "wb") as localfile:
            localfile.write(file.read())
        
        localfile.close()

        response = ollama.chat(model=llm_vision_model, messages=[
            create_prompt_object("system", {
                "content": "You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Output requirements (strict): only coding blocks in response."
            }),
            create_prompt_object("user", {
                "content": f"""
                "Analyse the image attached, find the web components and structure of the tempate and give response according to that."

                Question: {query or "Please convert image to html"}
                """,
                "images": [filepath]
            })
        ])

        llm_resp = response
    except Exception as e:
        print("Error while reading image", e)
    finally:
        pass
        # if os.path.exists(filepath):
            # os.remove(filepath)

    return llm_resp