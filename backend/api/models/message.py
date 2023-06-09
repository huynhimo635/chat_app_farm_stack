from datetime import datetime
from pydantic import BaseModel


class MessageBaseSchema(BaseModel):
    conversation_id: str
    sender: str
    content: str
    readers: list[str]
    created_at: datetime | None = None

    class Config:
        orm_mode = True


class MessageResponseSchema(MessageBaseSchema):
    id: str
    pass
