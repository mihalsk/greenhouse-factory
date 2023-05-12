from sqlalchemy import create_engine
from BaseModel import Base

from models import BaseModel, Goods, Cities, Reviews

engine = create_engine('mysql+pymysql://root:12345@db/zgtdb?charset=utf8mb4')

Base.metadata.create_all(engine, checkfirst=True)
