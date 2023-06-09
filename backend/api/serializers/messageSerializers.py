from database import User, Conversation

from .userSerializers import userResponseEntity
from .conversationSerializers import conversationResponseEntity


def messageEntity(message) -> dict:
    return {
        "id": str(message["_id"]),
        "conversation_id": message["conversation_id"],
        "sender": message["sender"],
        "content": message["content"],
        "readers": message["readers"],
        "created_at": message["created_at"],
    }


def messageResponseEntity(message) -> dict:
    conversation = Conversation.find_one({"_id": message["conversation_id"]})
    sender = User.find_one({"_id": message["sender"]})

    conversations_response = conversationResponseEntity(conversation)
    sender_response = userResponseEntity(sender)

    return {
        "id": str(message["_id"]),
        "conversation_id": message["conversation_id"],
        "conversation": conversations_response,
        "sender_data": sender_response,
        "sender": message["sender"],
        "content": message["content"],
        "readers": message["readers"],
        "created_at": message["created_at"],
    }


def messageListEntity(messages) -> list:
    return [messageEntity(message) for message in messages]
