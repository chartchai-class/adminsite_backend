FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install

RUN apk --no-cache add mysql-client

ARG CACHEBUST=1
EXPOSE 5001
RUN echo 'npm start will run'
CMD ["node", "--es-module-specifier-resolution=node", "index.js"]


