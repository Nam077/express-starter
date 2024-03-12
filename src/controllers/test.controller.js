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
        res.render('test', { title: 'Test Page', message: 'Hello, this is a test page!' });
    }
}

export default TestController;
