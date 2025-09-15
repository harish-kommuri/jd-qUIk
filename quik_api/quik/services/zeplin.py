import requests
import json
import os
from pathlib import Path

ZEPLIN_CLIENT_ID = "68c7b15fe6f0230a052a4bc7"
ZEPLIN_REDIRECT_URL = "http://localhost:3000/zeplin/login-redirect"
ZEPLIN_CLIENT_SECRET = "3ff4434f9d791c573e321321ddf941a2179eccfedb63f1733d58a9258f791795"

url = "https://api.zeplin.dev/v1/oauth/token"
auth_file_path = str(Path.cwd()) + "/documents"

def retrieve_token_data(code: str):
    try:
        payload = {
            "grant_type": "authorization_code",
            "code": code,
            "client_id": ZEPLIN_CLIENT_ID,
            "client_secret": ZEPLIN_CLIENT_SECRET,
            "redirect_uri": ZEPLIN_REDIRECT_URL
        }

        headers = {
            "accept": "application/json",
            "content-type": "application/json"
        }

        response = requests.post(url, json=payload, headers=headers)
        resobj = json.loads(response.text)

        if "access_token" in resobj:
            file_path = auth_file_path + "/zeplin_auth.json"

            if os.path.exists(file_path):
                os.remove(file_path)

            with open(file_path, "w") as f:
                f.write(response.text)  
          
            f.close()

            return True
        else:
            return False
    except Exception as e:
        print(e)
        return False