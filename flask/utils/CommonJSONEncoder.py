from datetime import datetime
from json import JSONEncoder
from models.Cities import Cities
from models.Goods import Goods
from models.Reviews import Reviews


class CommonJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Cities) or isinstance(obj, Goods) or isinstance(obj, Reviews):
            obj_dict = obj.__dict__
            if '_sa_instance_state' in obj_dict:
                obj_dict.pop('_sa_instance_state')
            return obj_dict
        if isinstance(obj, datetime):
            return obj.replace(microsecond=0).isoformat().replace('T', ' ')
        return repr(obj)
