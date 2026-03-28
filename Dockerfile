FROM node:18

WORKDIR /usr/src/blog

COPY . .

RUN npm i

EXPOSE 3001

CMD [ "npm", "run", "dev" ]