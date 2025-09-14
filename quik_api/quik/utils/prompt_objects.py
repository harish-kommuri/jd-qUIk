chat_history = {}


def ollama_obj(role: str, content: str, images = []):
    return {
        "role": role,
        "content": content,
        "images": images
    }


def curl_call_obj(role, content: str, images = []):
    if role == "system":
        return { "role": "system", "content": content }
    
    content_arr = [{
        "type": "text",
        "text": content
    }]

    if len(images) > 0:
        for image in images:
            content_arr.append({
                "type": "image_url",
                "image_url": {
                    "url": image
                }
            })

    return {
        "role": role,
        "content": content_arr
    }


def create_prompt_object(role: str, paramsobj):
    content = paramsobj.get("content", "")
    images = paramsobj.get("images", [])
    _type = paramsobj.get("type", "")

    if _type != "curl_based":
        return ollama_obj(role, content, images)
    else:
        return curl_call_obj(role, content, images)
    

def prompt_with_history(chatid: str, role: str, params, isimage: bool = False):
    history = chat_history.get(chatid, [])
    new_prompt = create_prompt_object(role, params)

    if len(history):
        history.extend(new_prompt)
    else:    
        history = [
            create_prompt_object("system", {
                "content": "You are a pro in web development nad have enormous knowledge in React.js, tailwind and CSS. Output requirements (strict): only coding blocks in response."
            }),
            new_prompt
        ]

    chat_history[chatid] = history
    return history

def append_agent_message(chatid: str, content):
    history = chat_history.get(chatid, [])

    if len(history) > 0 and len(content) > 0:
        history.extend(
            create_prompt_object("agent", {
                "content": content
            })
        )

        chat_history[chatid] = history