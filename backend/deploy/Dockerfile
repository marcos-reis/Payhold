FROM node

WORKDIR /usr/api

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
