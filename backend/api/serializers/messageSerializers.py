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
    return {
        "id": str(message["_id"]),
        "conversation_id": message["conversation_id"],
        "sender": message["sender"],
        "content": message["content"],
        "readers": message["readers"],
        "created_at": message["created_at"],
    }


def messageListEntity(messages) -> list:
    return [messageEntity(message) for message in messages]
