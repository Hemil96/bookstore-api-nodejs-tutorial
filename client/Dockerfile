FROM node:10.12-alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
