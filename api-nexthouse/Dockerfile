FROM node:10


WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install

ARG DATABASE_URL
ARG HASH_KEY

ENV DATABASE_URL ${DATABASE_URL}
ENV HASH_KEY ${HASH_KEY}

EXPOSE 3001
COPY . .

CMD [ "npm", "run", "dev" ]