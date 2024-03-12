import { CategoryController } from '../controllers';
import { Router } from 'express';
import { loggerMiddleware } from '../middleware';
import { categoryValidationRules } from '../validation/create.category';
import { validationResult } from 'express-validator';
class CategoryRoute {
    /**
     * Creates an instance of TestRoute.
     * @param {{ categoryController: CategoryController}} services An object containing services.
     */
    constructor({ categoryController }) {
        this.router = Router();
        this.router.use(loggerMiddleware);
        this.categoryController = categoryController;
    }

    setupRoutes() {
        this.router.get('/category', this.categoryController.get.bind(this.categoryController));
        this.router.get('/category/:id', this.categoryController.getById.bind(this.categoryController));
        this.router.post(
            '/category',
            categoryValidationRules,
            this.validate,
            this.categoryController.create.bind(this.categoryController),
        );
        this.router.put('/category/:id', this.categoryController.update.bind(this.categoryController));
        this.router.delete('/category/:id', this.categoryController.delete.bind(this.categoryController));
        return this.router;
    }
    validate(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
}

export default CategoryRoute;
