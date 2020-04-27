FROM node:alpine
WORKDIR /usr/app/
COPY ./server.js ./server.js
EXPOSE 80
CMD node ./server.js