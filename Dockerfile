FROM node:20-alpine3.19

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

COPY .env .env

RUN npm i -g typescript
RUN npm --prefix /usr/src/app run build

CMD [ "npm run start" ]