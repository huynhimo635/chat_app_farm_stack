from datetime import datetime

from fastapi import APIRouter, Depends
from bson.objectid import ObjectId
from api.serializers.conversationSerializers import conversationListEntity, conversationResponseEntity
from database import Conversation, User
import oauth2

router = APIRouter()


@router.get("/")
async def get_all(user_id: str = Depends(oauth2.require_user)):
    # Get all conversations
    conversations = Conversation.find({})
    conversations_dict = conversationListEntity(conversations)

    # Find the chatters not have conversations with this user, then create conversation for it
    # Get all users to check
    all_users = User.find({})
    for user in all_users:
        existing_conversation = next(
            (
                con
                for con in conversations_dict
                if user["_id"] in con.get("members")
                and con.get("is_group_room") is False
            ),
            None,
        )
        if existing_conversation is None:
            new_conversation_dict = dict(
                members=[ObjectId(str(user_id)), user["_id"]],
                name='',
                is_group_room=False,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            )
            result = Conversation.insert_one(new_conversation_dict)
            conversations_dict.append(conversationResponseEntity(Conversation.find_one({"_id": result.inserted_id})))

    # Populate to return
    return {"status": "success", "conversations": conversations_dict}

