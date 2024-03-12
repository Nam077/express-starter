// api/TestRoute.js
import { Router } from 'express';
class TestRoute {
    constructor({ testController }) {
        this.testController = testController;
    }

    setupRoutes() {
        const router = Router();
        router.get('/test', (req, res) => this.testController.get(req, res));
        return router;
    }
}

export default TestRoute;
