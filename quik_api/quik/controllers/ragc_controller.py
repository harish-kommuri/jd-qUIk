from uuid import uuid4
from pathlib import Path
import os
import shutil

from fastapi import UploadFile
import ollama

from quik.utils.prompt_objects import prompt_with_history, append_agent_message
from quik.services.prompt import get_prompt
from quik.config.constants import llm_model, llm_vision_model
from quik.services.generator import image_to_html

uploads_path = str(Path.absolute(Path.cwd())) + "/uploads"

if not os.path.exists(uploads_path):
    os.mkdir(uploads_path)

def text_prompt_handler(chatid: str, question):
    prompt = get_prompt(question)
    messages = prompt_with_history(chatid, "user", {
        "content": prompt
    })

    response = ollama.chat(model=llm_model, messages=messages)
    agent_content = response['message']['content']
    append_agent_message(chatid, agent_content)
    return agent_content


async def image_prompt_handler(chatid: str, file: UploadFile, query: str):
    tempname = str(uuid4()) + "_" + file.filename
    filepath = uploads_path + "/" + tempname
    llm_resp = ""

    try:
        with open(filepath, "wb") as localfile:
            shutil.copyfileobj(file.file, localfile)
        
        localfile.close()

        generated = image_to_html(filepath, query)

        print(generated)

        # messages = prompt_with_history(chatid, "user", {
        #     "content": f"""
        #     "Analyse the image attached, find the web components and structure of the tempate and give response according to that."

        #     Question: {query or "Please convert image to html"}
        #     """,
        #     "images": [filepath]
        # })

        # response = ollama.chat(model=llm_vision_model, messages=messages)
        # agent_message = response["message"]["content"] or ""
        # llm_resp = agent_message
        # append_agent_message(chatid, agent_message)
    except Exception as e:
        print("Error while reading image", e)
    finally:
        pass
        if os.path.exists(filepath):
            os.remove(filepath)

    return llm_resp