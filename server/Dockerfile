FROM node:10.12-alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

EXPOSE 8000

CMD ["yarn", "start"]
