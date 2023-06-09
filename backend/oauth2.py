import base64
from typing import List
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import MissingTokenError
from pydantic import BaseModel
from bson.objectid import ObjectId

from config import settings
from database import User

from api.serializers.userSerializers import userEntity


class Settings(BaseModel):
    authjwt_algorithm: str = settings.JWT_ALGORITHM
    authjwt_decode_algorithms: List[str] = [settings.JWT_ALGORITHM]
    authjwt_token_location: set = {"cookies", "headers"}
    authjwt_access_cookie_key: str = "access_token"
    authjwt_refresh_cookie_key: str = "refresh_token"
    authjwt_cookie_csrf_protect: bool = False
    authjwt_public_key: str = base64.b64decode(settings.JWT_PUBLIC_KEY).decode("utf-8")
    authjwt_private_key: str = base64.b64decode(settings.JWT_PRIVATE_KEY).decode(
        "utf-8"
    )


@AuthJWT.load_config
def get_config():
    return Settings()


# Exceptions
class NotVerified(Exception):
    pass


class UserNotFound(Exception):
    pass


reuseable_oauth = OAuth2PasswordBearer(
    tokenUrl="/login",
    scheme_name="JWT"
)


def require_user(Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
        user_id = Authorize.get_jwt_subject()
        user = userEntity(User.find_one({"_id": ObjectId(str(user_id))}))

        if not user:
            raise UserNotFound("User no longer exist")

        if not user["verified"]:
            raise NotVerified("You are not verified")

    except MissingTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="You are not logged in"
        )

    except UserNotFound:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="User no longer exist"
        )

    except NotVerified:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Please verify your account",
        )

    except Exception as e:
        error = e.__class__.__name__
        print(error)

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token is invalid or has expired",
        )

    return user_id



