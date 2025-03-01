FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Add the build command back
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]
