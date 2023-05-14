from peewee import MySQLDatabase, Model, IntegerField, DateTimeField, BooleanField, SQL

mysql_db = MySQLDatabase('zgtdb', user='mihal', password='12345',
                         host='db', port=3306, charset='utf8mb4')


class BaseModel(Model):
    id = IntegerField(primary_key=True, null=False)
    created = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')], null=False)
    updated = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')], null=False)
    is_active = BooleanField(default=True, null=False)

    class Meta:
        database = mysql_db
