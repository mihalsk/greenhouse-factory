FROM python:latest
WORKDIR /flask
ADD . /flask
RUN pip install -r requirements.txt
CMD [ "uwsgi", "app.ini" ]