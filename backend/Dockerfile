FROM node

WORKDIR /usr/api

COPY package*.json ./
COPY yarn.lock ./

RUN yarn add dotenv
RUN yarn global add @adonisjs/cli nodemon

COPY . .
