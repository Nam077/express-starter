import Category from '../models/Category';

/**
 * Class representing a test service.
 */
class TestService {
    constructor({ appDataSource }) {
        this.appDataSource = appDataSource;
        this.categoryRepository = appDataSource.getRepository(Category);
    }
    /**
     * Get a message.
     * @returns {string} The test message.
     */
    async getMessage() {
        res.render('test', { title: 'Test Page', message: 'Hello, this is a test page!' });
    }
}

export default TestService;
