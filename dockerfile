FROM docker.io/node:6-alpine
MAINTAINER twy

COPY /. /var/seo_server
WORKDIR /var/seo_server

RUN npm install
EXPOSE 3000
CMD ['npm','run','start'] 


