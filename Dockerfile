FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install typescript @vue/cli-plugin-typescript ts-loader @types/node --save-dev
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]
