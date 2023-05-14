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
    query = Cities.select().where(Cities.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query)))


@app.get("/goods")
async def goods_list():
    query = Goods.select().where(Goods.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query)))


@app.get("/reviews")
async def reviews_list():
    query = Reviews.select().where(Reviews.is_active).dicts()
    return JSONResponse(content=jsonable_encoder(list(query)))
