from quik.services import zeplin


def get_zeplin_token_data(token: str):
    return zeplin.retrieve_token_data(token)
