# Simple VUE/REACT SPA with rest api FastAPI(Peewee)/Flask(SQLAlchemy) backend 

SPA port 8080<br/>
Rest API port 8000

Развёртывание(vue+fastapi):<br/>
git clone ...<br/>
В vue/clie/config/prod.env.js прописать внешний ip docker в строке <code>VUE_APP_API_HOST: '"127.0.0.1"'</code><br/>
В папке /ready-made-greenhouse-plant-factory делаем <code>docker-compose up</code><br/>

Включение react<br/>
В docker-compose.yml:<br/>
- закоментировать ui блок ./vue/clie<br/>
- раскоментировать ui блок ./zgt-react<br/>
- в файле docker-compose.yml прописать внешний ip docker в строке <code>REACT_APP_API_HOST='"127.0.0.1"'</code><br/>

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

Deploy(vue+fastapi):<br/>
git clone ...<br/>
In vue/clie/config/prod.env.js add external docker ip in line <code>VUE_APP_API_HOST: '"127.0.0.1"'</code><br/>
In the folder /ready-made-greenhouse-plant-factory do <code>docker-compose up</code><br/>

Including react<br/>
In docker-compose.yml:<br/>
- comment out the ui block ./vue/clie<br/>
- uncomment ui block ./zgt-react<br/>
- in file docker-compose.yml write the external ip docker in the line <code>REACT_APP_API_HOST='"127.0.0.1"'</code><br/>

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

