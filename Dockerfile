FROM node:alpine
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 5001
RUN echo 'npm start will run'
CMD ["node", "--es-module-specifier-resolution=node", "index.js"]


