from peewee import CharField

from models.BaseModel import BaseModel


class Reviews(BaseModel):
    Author_name = CharField(max_length=255, null=False)
    text = CharField(max_length=255, null=False)
    photo = CharField(max_length=255)

    class Meta:
        table_name = 'reviews'
