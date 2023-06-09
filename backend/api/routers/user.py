from fastapi import APIRouter, Depends
from bson.objectid import ObjectId
from api.serializers.userSerializers import userResponseEntity
from api.models import users
from database import User
import oauth2

router = APIRouter()


@router.get("/profile", response_model=users.UserResponse)
def get_profile(user_id: str = Depends(oauth2.require_user)):
    user = userResponseEntity(User.find_one({"_id": ObjectId(str(user_id))}))
    return {"status": "success", "user": user}
