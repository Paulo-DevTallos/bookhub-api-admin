FROM node:16-alpine

USER node

WORKDIR /home/bookhub_api_admin/app

COPY package*.json .

RUN npm install

EXPOSE 3006
