FROM node:10 as builder

WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm install -g react-scripts

COPY . .
RUN npm run build

FROM node:10
WORKDIR /app
EXPOSE 3000

RUN npm install -g serve

COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]
