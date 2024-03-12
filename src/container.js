import { createContainer, asClass, asFunction, asValue } from 'awilix';

// Import classes
import Server from './server';
import { TestService, CategoryService } from './services/index';
import { TestController, CategoryController } from './controllers';
import { TestRoute, CategoryRoute } from './routes';
import { loggerMiddleware } from './middleware';
import AppDataSource from './database/datasource';
// Tạo container
const container = createContainer();

// Đăng ký vào container
container.register({
    appDataSource: asValue(AppDataSource),
    server: asClass(Server).singleton(),
    testService: asClass(TestService).singleton(),
    categoryService: asClass(CategoryService).singleton(),
    testController: asClass(TestController).singleton(),
    categoryController: asClass(CategoryController).singleton(),
    testRoute: asClass(TestRoute).singleton(),
    categoryRoute: asClass(CategoryRoute).singleton(),
    loggerMiddleware: asFunction(loggerMiddleware).singleton(),
});

export default container;
