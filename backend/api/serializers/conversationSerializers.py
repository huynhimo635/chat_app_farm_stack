def conversationEntity(conversation) -> dict:
    return {
        "id": str(conversation["_id"]),
        "members": conversation["members"],
        "name": conversation["str"],
        "is_group_room": conversation["is_group_room"],
        "created_at": conversation["created_at"],
        "updated_at": conversation["updated_at"],
    }


def conversationResponseEntity(conversation) -> dict:
    return {
        "id": str(conversation["_id"]),
        "members": conversation["members"],
        "name": conversation["str"],
        "is_group_room": conversation["is_group_room"],
        "created_at": conversation["created_at"],
        "updated_at": conversation["updated_at"],
    }


def conversationListRoomEntity(conversations) -> list:
    return [conversationEntity(conversation) for conversation in conversations if conversation.is_group_zoom is True]


def conversationListPersonalEntity(conversations) -> list:
    return [conversationEntity(conversation) for conversation in conversations if conversation.is_group_zoom is False]


def conversationListAllEntity(conversations) -> list:
    return [conversationEntity(conversation) for conversation in conversations]
