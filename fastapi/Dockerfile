FROM python:latest
WORKDIR /fastapi
ADD . /fastapi
RUN pip install -r requirements.txt
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5000", "--proxy-headers"]