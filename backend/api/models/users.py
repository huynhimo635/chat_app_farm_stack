from datetime import datetime
from pydantic import BaseModel, EmailStr, constr


class UserBaseSchema(BaseModel):
    first_name: str
    last_name: str
    email: str
    photo: str = ""
    created_at: datetime | None = None
    updated_at: datetime | None = None

    class Config:
        orm_mode = True


class CreateUserSchema(UserBaseSchema):
    password: constr(min_length=8)
    password_confirm: str
    verified: bool = False


class LoginUserSchema(BaseModel):
    email: EmailStr
    password: constr(min_length=8)


class UserResponseSchema(UserBaseSchema):
    id: str
    full_name: str = ""
    pass


class UserResponse(BaseModel):
    status: str
    user: UserResponseSchema
