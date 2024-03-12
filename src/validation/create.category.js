import { body } from 'express-validator';
export const categoryValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
];
