FROM node:8-alpine

COPY . /app/
WORKDIR /app

RUN yarn install --no-cache --pure-lockfile && yarn build

EXPOSE 5000
CMD [ "yarn", "run", "server" ]
