FROM node:alpine

ENV NODE_ENV = production
ADD main.js /app/
ADD package.json /app/
ADD views/* /app/views/
WORKDIR /app
RUN npm install
CMD npm start