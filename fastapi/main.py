from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

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
    return {"message": "Hello World"}


@app.get("/cities")
async def cities_list():
    query_result = Cities.select().where(Cities.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query_result)))


@app.get("/goods")
async def goods_list(offset: int = 0, limit: int = 5):
    query_result = Goods.select().offset(offset).limit(limit).where(Goods.is_active).dicts()
    print(len(query_result))
    return JSONResponse(content=jsonable_encoder(list(query_result)))


@app.get("/reviews")
async def reviews_list(offset: int = 0, limit: int = 5):
    query_result = Reviews.select().offset(offset).limit(limit).where(Reviews.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query_result)))
