import json
from flask.json.provider import JSONProvider
from utils.CommonJSONEncoder import CommonJSONEncoder


class CommonJSONProvider(JSONProvider):

    def dumps(self, obj, **kwargs):
        return json.dumps(obj, **kwargs, cls=CommonJSONEncoder)

    def loads(self, s: str | bytes, **kwargs):
        return json.loads(s, **kwargs)