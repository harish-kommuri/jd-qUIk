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

    if _type == "ollama":
        return ollama_obj(role, content, images)
    else:
        return curl_call_obj(role, content, images)