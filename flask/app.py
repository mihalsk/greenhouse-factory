from contextlib import contextmanager

from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker, scoped_session
from models.Cities import Cities
from models.Goods import Goods
from models.Reviews import Reviews
from utils.CommonJSONProvider import CommonJSONProvider
# configuration
DEBUG = True

# instantiate the app
db = SQLAlchemy()
app = Flask(__name__)
app.json = CommonJSONProvider(app)
engine = create_engine('mysql+pymysql://mihal:12345@db/zgtdb?charset=utf8mb4')
sm = sessionmaker(bind=engine)
# enable CORS
CORS(app)


@contextmanager
def db_session(sessionmaker_obj):
    db_session = None
    try:
        db_session = scoped_session(sessionmaker_obj)
        yield db_session
        # db_session.commit()
        db_session.flush()
    except Exception as e:
        print(f"exception in session {db_session} {str(e)}")
        db_session.rollback()
    finally:
        print(f"close session {db_session}")
        db_session.close()


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


@app.route("/cities")
def cities_list():
    with db_session(sm) as session:
        query = select(Cities).order_by(Cities.id)
        cities = session.scalars(query).all()
    return jsonify(cities)


@app.route("/goods")
def goods_list():
    with db_session(sm) as session:
        query = select(Goods).order_by(Goods.id)
        goods = session.scalars(query).all()
    return jsonify(goods)


@app.route("/reviews")
def reviews_list():
    with db_session(sm) as session:
        query = select(Reviews).order_by(Reviews.id)
        reviews = session.scalars(query).all()
    return jsonify(reviews)


if __name__ == '__main__':
    app.run(debug=DEBUG, host='0.0.0.0')
