import { DataSource } from 'typeorm';
import Category from '../models/Category';

const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: 'db.sqlite',
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
