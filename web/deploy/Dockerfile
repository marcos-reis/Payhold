FROM node

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn global add serve

COPY . .

RUN yarn build




