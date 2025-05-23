FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN DISABLE_ESLINT_PLUGIN=true npm run build

EXPOSE 5000

CMD ["npm", "start"]