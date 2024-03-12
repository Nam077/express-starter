// controllers/TestController.js
import { CategoryService } from '../services';
/**
 * Controller for handling test routes.
 */
class CategoryController {
    /**
     * Creates an instance of CategoryController.
     * @param {{ categoryService: CategoryService }} services An object containing services.
     */
    constructor({ categoryService }) {
        /** @type {CategoryService} */
        this.categoryService = categoryService;
    }

    /**
     * Handles the GET request.
     * @param {Request} req The request object.
     * @param {Response} res The response object.
     */
    async get(req, res) {
        const categories = await this.categoryService.getAll();
        res.json(categories);
    }

    /**
     * Retrieves a category by its ID.
     *
     * @param {Object} req - the request object
     * @param {Object} res - the response object
     * @return {Promise} - a Promise that resolves to the retrieved category
     */
    async getById(req, res) {
        const category = await this.categoryService.getById(req.params.id);
        res.json(category);
    }

    /**
     * Asynchronous function to create a category using the request body and respond with the created category or an error message.
     *
     * @param {Object} req - The request object
     * @param {Object} res - The response object
     * @return {Promise} A promise that resolves with the created category or rejects with an error message
     */
    async create(req, res) {
        try {
            const category = await this.categoryService.create(req.body);
            res.json(201, category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    /**
     * Update the category using the provided request and response.
     *
     * @param {Object} req - the request object
     * @param {Object} res - the response object
     * @return {Promise} a Promise that resolves to the updated category
     */
    async update(req, res) {
        const category = await this.categoryService.update(req.params.id, req.body);
        res.json(category);
    }

    /**
     * Delete a category.
     *
     * @param {Object} req - the request object
     * @param {Object} res - the response object
     * @return {Promise} the deleted category
     */
    async delete(req, res) {
        const category = await this.categoryService.delete(req.params.id);
        res.json(category);
    }
}

export default CategoryController;
