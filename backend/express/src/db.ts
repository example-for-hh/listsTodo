import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';
import fs from 'fs';

const configFilePath = path.resolve(__dirname, `../ormconfig.json`);

const getOrmConfig = (): DataSourceOptions => {
    try {
        const fileContent = fs.readFileSync(configFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Failed to read or parse ormconfig.json:', error);
        throw error;
    }
};

const ormConfig: DataSourceOptions = getOrmConfig();

const AppDataSource = new DataSource(ormConfig);


AppDataSource.initialize()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Connection error', err.stack);
    });

export { AppDataSource };