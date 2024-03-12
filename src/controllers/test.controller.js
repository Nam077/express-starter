// controllers/TestController.js

import TestService from '../services/test.service';

/**
 * Controller for handling test routes.
 */
class TestController {
    /**
     * Creates an instance of TestController.
     * @param {{ testService: TestService }} services An object containing services.
     */
    constructor({ testService }) {
        /** @type {TestService} */
        this.testService = testService;
    }

    /**
     * Handles the GET request.
     * @param {Request} req The request object.
     * @param {Response} res The response object.
     */
    async get(req, res) {
        res.json(await this.testService.getMessage());
    }
}

export default TestController;
