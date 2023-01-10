FROM --platform=linux/amd64 node:16.14.0

RUN npm install -g add pm2 && pm2 update

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .

COPY --chown=node:node . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
