import { DataSource } from 'typeorm';
import Category from '../models/Category';
import 'dotenv/config';

const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: process.env.DATABASE_FILE,
    synchronize: true,
    logging: false,
    entities: [Category],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

export default AppDataSource;
