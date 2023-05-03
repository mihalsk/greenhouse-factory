from sqlalchemy import Integer, String, DECIMAL, Numeric
from sqlalchemy.orm import Mapped, mapped_column
from models.BaseModel import BaseModel


class Goods(BaseModel):
    __tablename__: str = 'Goods'
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    price: Mapped[DECIMAL] = mapped_column(Numeric(precision=8, asdecimal=False, decimal_return_scale=None), nullable=False) #DECIMAL(10, 2)
    photo: Mapped[str] = mapped_column(String(255))
    count: Mapped[int] = mapped_column(Integer, nullable=False)
    