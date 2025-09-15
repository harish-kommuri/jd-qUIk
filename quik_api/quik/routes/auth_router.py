from fastapi.routing import APIRouter
from quik.controllers.auth_controller import get_zeplin_token_data

auth_router = APIRouter(
    prefix="/auth"
)

@auth_router.get("/zeplin")
async def auth_zeplin(
    code: str
):
    data = get_zeplin_token_data(code)
    if data == True:
        return { "ok": 1, "msg": "Login information stored successfully." }
    else:
        return { "ok": 0, "msg": "Something went wrong." }
        