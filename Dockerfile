FROM node:20-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 3000

RUN npm run build

CMD [ "npm run start" ]