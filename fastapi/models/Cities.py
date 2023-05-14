from peewee import CharField

from models.BaseModel import BaseModel


class Cities(BaseModel):
    __tablename__ = 'cities'
    name = CharField(max_length=255, null=False)
    phone = CharField(max_length=255, null=False)
    coords = CharField(max_length=255)

    class Meta:
        table_name = 'cities'
