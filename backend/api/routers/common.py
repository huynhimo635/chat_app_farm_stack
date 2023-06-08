from fastapi import APIRouter, Depends
from bson.objectid import ObjectId
from api.serializers.userSerializers import userResponseEntity
from database import User
import oauth2

router = APIRouter()


@router.get("/health-check")
def health_check():
    return {"status": "success", "message": "Welcome to Chat app!"}


@router.get("/protected-health-check")
def protected_health_check(user_id: str = Depends(oauth2.require_user)):
    user = userResponseEntity(User.find_one({"_id": ObjectId(str(user_id))}))
    return {"status": "success", "user": user, "message": "Logged Successfully!"}
