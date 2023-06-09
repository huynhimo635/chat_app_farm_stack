from datetime import datetime
from pydantic import BaseModel


class ConversationBaseSchema(BaseModel):
    members: list[str]
    name: str = ''
    is_group_room: bool = False
    created_at: datetime | None = None
    updated_at: datetime | None = None

    class Config:
        orm_mode = True


class ConversationResponseSchema(ConversationBaseSchema):
    id: str
    pass
