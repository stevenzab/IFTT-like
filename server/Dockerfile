FROM python:3.8-slim-buster

WORKDIR /server

COPY . .

RUN apt-get update && apt-get -y install cron

RUN pip3 install -r requirement.txt

RUN pip3 uninstall -r uninstallRequirement.txt -y

RUN pip3 install pyjwt

CMD ["./build.sh"]