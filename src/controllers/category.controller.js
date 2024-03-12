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

    async getById(req, res) {
        const category = await this.categoryService.getById(req.params.id);
        res.json(category);
    }

    async create(req, res) {
        try {
            const category = await this.categoryService.create(req.body);
            res.json(201, category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        const category = await this.categoryService.update(req.params.id, req.body);
        res.json(category);
    }

    async delete(req, res) {
        const category = await this.categoryService.delete(req.params.id);
        res.json(category);
    }
}

export default CategoryController;
