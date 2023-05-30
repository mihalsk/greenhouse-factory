from fastapi import FastAPI, Query
from typing import Annotated
from fastapi.encoders import jsonable_encoder
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from models.BaseModel import mysql_db
from models.Goods import Goods
from models.Cities import Cities
from models.Reviews import Reviews

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Ok"}


@app.get("/cities")
async def cities_list():
    with mysql_db as db:
        db.connect(reuse_if_open=True)
        db.connection().ping()
        query_result = Cities.select().where(Cities.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query_result)))


@app.get("/goods")
async def goods_list(
        offset: Annotated[int, Query(title="SQL OFFSET",
                                     description="offset to first record(SQL OFFSET), must be greater or equal 0",
                                     ge=0,
                                     le=1000)] = 0,
        limit: Annotated[int, Query(title="SQL LIMIT",
                                    description="limit record count(SQL LIMIT), must be greater 0",
                                    gt=0,
                                    le=1000)] = 5):
    with mysql_db as db:
        db.connect(reuse_if_open=True)
        db.connection().ping()
        query_result = Goods.select().offset(offset).limit(limit).where(Goods.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query_result)))


@app.get("/reviews")
async def reviews_list(
        offset: Annotated[int, Query(title="SQL OFFSET",
                                     description="offset to first record(SQL OFFSET), must be greater or equal 0",
                                     ge=0,
                                     le=1000)] = 0,
        limit: Annotated[int, Query(title="SQL LIMIT",
                                    description="limit record count(SQL LIMIT), must be greater 0",
                                    gt=0,
                                    le=1000)] = 5):
    with mysql_db as db:
        db.connect(reuse_if_open=True)
        db.connection().ping()
        query_result = Reviews.select().offset(offset).limit(limit).where(Reviews.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query_result)))
