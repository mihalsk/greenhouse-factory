from peewee import CharField, IntegerField, DecimalField

from models.BaseModel import BaseModel


class Goods(BaseModel):
    name = CharField(max_length=255, null=False)
    price = DecimalField(max_digits=8, decimal_places=2, null=False)
    photo = CharField(max_length=255)
    count = IntegerField(null=False)

    class Meta:
        table_name = 'goods'
