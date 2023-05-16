# "Ready-made greenhouse plant factory" SPA 
"Завод готовых теплиц" SPA

SPA port 8080<br/>
Rest API port 8000

В App.vue(/vue/clie/src/) поменять "localhost" в строке 239:<br/>
<code>const host = 'localhost:8000';</code><br/>
на свой ip адрес хоста Docker.<br/>
По умолчанию docker поднимается с fastapi(peewee) бэкендом. Для изменения на flask(sqlalchemy) в файле docker-compose.yml закомментировать блок fastapi и раскоментировать блок api, а также в nginx.conf(/nginx/) закомментировать блок:
<code>
server {
&nbsp;&nbsp;listen 8000;
&nbsp;&nbsp;location / {
&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass http://fastapi:5000;
&nbsp;&nbsp;}
}
</code>
и раскомментировать блок:
<code>
\# server {
\#   listen 8000;
\#     location / {
\#       include uwsgi_params;
\#       uwsgi_pass api:5000;
\#    }
\# }
</code>

In App.vue(/vue/clie/src/) change "localhost" on line 239<br/>
<i>const host = 'localhost:8000';</i><br/>
to your Docker host ip address.<br/>
By default, docker comes up with a fastapi(peewee) backend. To change to flask(sqlalchemy) in the docker-compose.yml file, comment out the fastapi block and uncomment the api block, and also comment out the block in nginx.conf(/nginx/):
<code>
server {
&nbsp;&nbsp;listen 8000;
&nbsp;&nbsp;location / {
&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass http://fastapi:5000;
&nbsp;&nbsp;}
}
</code>
and uncomment the block:
<code>
\# server {
\#   listen 8000;
\#     location / {
\#       include uwsgi_params;
\#       uwsgi_pass api:5000;
\#    }
\# }
</code>

