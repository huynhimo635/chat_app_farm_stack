from fastapi import APIRouter, Depends
from api.serializers.messageSerializers import messageResponseEntity
from database import Message
import oauth2

router = APIRouter()


@router.get("/{conversation_id}")
async def get_personal_room(
    conversation_id: str, user_id: str = Depends(oauth2.require_user)
):
    all_messages = Message.find({"conversation_id", conversation_id}).sort("created_at")

    # Populate to return
    response_messages = [messageResponseEntity(mess) for mess in all_messages]

    return {"status": "success", "messages": response_messages}
