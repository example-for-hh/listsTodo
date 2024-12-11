import 'reflect-metadata';
import cors, { CorsOptions } from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import fs from 'fs';
import https from 'https';
import express, { Application } from 'express';
import { schema } from './schema';
import { AppDataSource } from './db';
import { resolvers } from './resolvers';

const app: Application = express();

AppDataSource.initialize().then(() => {

    const originUrl = process.env.NODE_ENV != 'development'
        ? ['https://localhost']
        :
        ['http://localhost:4200', 'http://localhost:3000',]

    const corsOptions: CorsOptions = {
        origin: originUrl,
        credentials: true,
        methods: ['POST', 'GET', ''],
        optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));

    const graphiqlEnabled: boolean = process.env.NODE_ENV === 'development';

    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            rootValue: resolvers,
            graphiql: graphiqlEnabled,
        })
    );

    const PORT = process.env.PORT || 8443;



    const sslOptions = {
        key: fs.readFileSync('/app/ssl/localhost.key'),
        cert: fs.readFileSync('/app/ssl/localhost.crt'),
    };

    const httpsServer = https.createServer(sslOptions, app);
    const wsServer = new WebSocketServer({
        server: httpsServer,
        path: '/subscriptions',
    });


    useServer({ schema }, wsServer)

    httpsServer.listen(PORT, () => {
        console.log(`Сервер работает на порту ${PORT}`);
    });

}).catch((error) => console.log('Ошибка инициализации базы данных:', error));