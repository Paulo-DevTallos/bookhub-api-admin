FROM node:18-alpine

USER root
## user permission diferent of root can block some resouces and commands in docker execution

WORKDIR /home/bookhub_api_admin/app

COPY package*.json .

RUN npm install

EXPOSE 3006

##CMD [ "sh", "-c", "npm install" ]
