// index.js

import container from './container';
import Server from './server';
import 'dotenv/config';

const routes = ['testRoute', 'categoryRoute'];
const PORT = process.env.PORT || 3000;
const server = new Server(container, routes);
server.listen(PORT);
