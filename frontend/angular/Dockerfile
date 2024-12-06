# Stage 1: Сборка приложения
FROM node:18-alpine

WORKDIR /app

ENV NG_CLI_ANALYTICS=false

# Установка Angular CLI
RUN npm install -g @angular/cli

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование исходных файлов
COPY . .

EXPOSE 4200

# Сборка Angular приложения
RUN npm run build:prod