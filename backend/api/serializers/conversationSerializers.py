from database import User

from .userSerializers import userResponseEntity



def conversationEntity(conversation) -> dict:
    return {
        "id": str(conversation["_id"]),
        "members": conversation["members"],
        "name": conversation["name"],
        "is_group_room": conversation["is_group_room"],
        "created_at": conversation["created_at"],
        "updated_at": conversation["updated_at"],
    }


def conversationResponseEntity(conversation) -> dict:
    member_list_dict = []
    for member in conversation["members"]:
        user = User.find_one({"_id": member})

        if user is not None:
            member_list_dict.append(userResponseEntity(user))

    return {
        "id": str(conversation["_id"]),
        "members": conversation["members"],
        "name": conversation["name"],
        "is_group_room": conversation["is_group_room"],
        "created_at": conversation["created_at"],
        "updated_at": conversation["updated_at"],
        "members_data": member_list_dict,
    }


def conversationListEntity(conversations) -> list:
    return [conversationEntity(conversation) for conversation in conversations]
