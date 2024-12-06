FROM node:18-alpine

WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

EXPOSE 8443

RUN mkdir -p /app/ssl

# Building app
RUN npm run build:prod

# Running the app
CMD [ "npm", "run", "start:prod" ]
