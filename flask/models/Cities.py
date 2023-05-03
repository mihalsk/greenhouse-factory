from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from models.BaseModel import BaseModel


class Cities(BaseModel):
    __tablename__ = 'Cities'
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    phone: Mapped[str] = mapped_column(String(255), nullable=False)
    coords: Mapped[str] = mapped_column(String(255))

