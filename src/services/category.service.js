import { DataSource, Repository } from 'typeorm';
import Category from '../models/Category';
class CategoryService {
    /**
     * Creates an instance of CategoryService.
     * @param {{ appDataSource: DataSource }} services An object containing services.
     * @memberof CategoryService
     *
     */

    constructor({ appDataSource }) {
        this.appDataSource = appDataSource;
        this.categoryRepository = this.appDataSource.getRepository(Category);
    }
    /**
     * Check if a category with the given name exists.
     *
     * @param {string} name - The name of the category to check for existence
     * @return {Promise<boolean>} A boolean indicating if the category exists
     */
    async checkExist(name) {
        return await this.categoryRepository.exist({ where: { name: name } });
    }

    /**
     * Retrieves all records from the category repository.
     *
     * @return {Promise<Category[]>} A promise that resolves to an array of Category objects.
     */
    async getAll() {
        return await this.categoryRepository.find();
    }

    /**
     * Retrieve a category by its ID.
     *
     * @param {type} id - The ID of the category to retrieve
     * @return {type} The category found by the given ID
     */
    async getById(id) {
        return await this.categoryRepository.findOneBy({ id: id });
    }

    /**
     * Create a new category.
     *
     * @param {type} category - description of parameter
     * @return {type} Promise - description of return value
     */

    async create(category) {
        const { name, description } = category;
        if (await this.checkExist(name)) {
            throw new Error('Category already exists');
        }
        return await this.categoryRepository.save(category);
    }

    /**
     * Update a category by its id.
     *
     * @param {type} id - description of id parameter
     * @param {type} category - description of category parameter
     * @return {type} Promise - a Promise that resolves to the updated category
     */
    async update(id, category) {
        const findCategory = await this.getById(id);
        const { name = null, description = null } = category;
        if (name && name !== findCategory.name && (await this.checkExist(name))) {
            throw new Error('Category already exists');
        }
        return await this.categoryRepository.update(id, category);
    }
    /**
     * Delete a record by its ID.
     *
     * @param {type} id - the ID of the record to be deleted
     * @return {type} the result of the delete operation
     */
    async delete(id) {
        const category = await this.getById(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return await this.categoryRepository.remove(category);
    }
}

export default CategoryService;
