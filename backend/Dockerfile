FROM node:20-alpine

WORKDIR /app

ENV DATABASE_URL="postgresql://vuser:p4ssw0rld0@postgres:5432/sql"
ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci

COPY . .


RUN npx prisma generate

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]