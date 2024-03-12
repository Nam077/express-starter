import express from 'express';
import { asValue } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import { create, engine } from 'express-handlebars'; // Import Express Handlebars
import path from 'path'; // Import path module
const hbs = create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
});
class Server {
    constructor(container, routes) {
        this.app = express();
        this.container = container;

        // Middleware to parse JSON requests
        this.app.use(express.json());

        // Middleware to set up scope per request for Awilix container
        this.app.engine('.hbs', engine({ extname: '.hbs' }));
        this.app.set('view engine', '.hbs');
        this.app.set('views', path.join(__dirname, 'views')); // Thư mục chứa các file view

        // Set up routes
        routes.forEach((routeClass) => {
            const route = this.container.resolve(routeClass);
            this.app.use('/', route.setupRoutes());
        });
    }

    // Method to start the server
    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}

export default Server;
