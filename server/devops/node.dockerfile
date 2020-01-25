FROM node:latest

EXPOSE 5000
WORKDIR /app

VOLUME /app

# COPY ./package.json ./
# COPY ./index.js ./

# RUN npm install

CMD ["npm", "run", "start" ]