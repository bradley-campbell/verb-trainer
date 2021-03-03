FROM nikolaik/python-nodejs:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN pip3 install mlconjug3

COPY . .

EXPOSE 3333

CMD [ "node", "index.js" ]