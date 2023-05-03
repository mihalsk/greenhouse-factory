import datetime
from sqlalchemy import Integer, Boolean, DateTime
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy.sql import func


class Base(DeclarativeBase):
    pass


class BaseModel(Base):
    __abstract__ = True

    id: Mapped[int] = mapped_column(Integer,
                                    nullable=False,
                                    unique=True,
                                    primary_key=True,
                                    autoincrement=True)
    created: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True),
                                                       nullable=False,
                                                       server_default=func.now())
    updated: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True),
                                                       nullable=False,
                                                       server_default=func.now())
    is_active: Mapped[bool] = mapped_column(Boolean,
                                            nullable=False,
                                            default=True)

    def __repr__(self):
        return "<{0.__class__.__name__}(id={0.id!r})>".format(self)
