FROM node:16

ENV NODE_PORT 5001
ENV INSTALL_PATH /usr/src/app

RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $NODE_PORT

CMD ["npm", "run", "start"]