import { createContainer, asClass, asFunction } from 'awilix';

// Import classes
import Server from './server';
import { TestService } from './services/index';
import TestController from './controllers/test.controller';
import TestRoute from './routes/test.route';
import { loggerMiddleware } from './middleware';

// Tạo container
const container = createContainer();

// Đăng ký vào container
container.register({
    server: asClass(Server).singleton(),
    testService: asClass(TestService).singleton(),
    testController: asClass(TestController).singleton(),
    testRoute: asClass(TestRoute).singleton(),
    loggerMiddleware: asFunction(loggerMiddleware).singleton(),
});

export default container;
