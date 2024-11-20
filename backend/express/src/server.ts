import 'reflect-metadata';
import cors, { CorsOptions } from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import http from 'http';
import express, { Application } from 'express';
import { schema } from './schema';
import { AppDataSource } from './db';
import { resolvers } from './resolvers';

const app: Application = express();

AppDataSource.initialize().then(() => {

    const corsOptions: CorsOptions = {
        origin: ['http://localhost:4200', 'http://localhost:3000'],
        credentials: true,
        optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));

    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            rootValue: resolvers,
            graphiql: true,
        })
    );

    const PORT: number = 4000;


    const server = http.createServer(app);

    const wsServer = new WebSocketServer({
        server,
        path: '/subscriptions',
    });


    useServer({ schema }, wsServer)

    server.listen(PORT, () => {
        console.log(`Сервер работает на порту ${PORT}`);
    });

}).catch((error) => console.log('Ошибка инициализации базы данных:', error));