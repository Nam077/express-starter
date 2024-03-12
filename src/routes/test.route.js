import { TestController } from '../controllers';
import { Router } from 'express';
import { loggerMiddleware } from '../middleware';

class TestRoute {
    /**
     * Creates an instance of TestRoute.
     * @param {{ testController: TestController, loggerMiddleware: any }} services An object containing services.
     */
    constructor({ testController }) {
        this.router = Router();
        this.router.use(loggerMiddleware);
        this.testController = testController;
    }

    setupRoutes() {
        return this.router.get('/test', this.testController.get.bind(this.testController));
    }
}

export default TestRoute;
