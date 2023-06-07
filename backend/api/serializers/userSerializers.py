def userEntity(user) -> dict:
    return {
        "id": str(user["_id"]),
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "email": user["email"],
        "photo": user["photo"],
        "verified": user["verified"],
        "password": user["password"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"],
    }


def userResponseEntity(user) -> dict:
    return {
        "id": str(user["_id"]),
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "full_name": user["first_name"] + " " + user["last_name"],
        "email": user["email"],
        "photo": user["photo"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"],
    }


def userListEntity(users) -> list:
    return [userEntity(user) for user in users]
