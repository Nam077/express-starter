// server.js
import express from 'express';
import { asValue } from 'awilix';
import { scopePerRequest } from 'awilix-express';

class Server {
    constructor(container, routes) {
        this.app = express();
        this.container = container;
        this.app.use(express.json());
        this.app.use(scopePerRequest(this.container));

        routes.forEach((routesClass) => {
            const route = this.container.resolve(routesClass);
            this.app.use('/', route.setupRoutes());
        });
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}

export default Server;
