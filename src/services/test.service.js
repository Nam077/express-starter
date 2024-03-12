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
        return await this.categoryRepository.find();
    }
}

export default TestService;
