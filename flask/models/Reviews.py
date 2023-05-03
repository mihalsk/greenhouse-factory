from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column

from models.BaseModel import BaseModel


class Reviews(BaseModel):
    __tablename__ = 'Review'
    Author_name: Mapped[str] = mapped_column(String(255), nullable=False)
    text: Mapped[Text] = mapped_column(Text, nullable=False)
    photo: Mapped[str] = mapped_column(String(255))
