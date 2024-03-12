import { createContainer, asClass } from 'awilix';

// Import classes
import Server from './server';
import TestService from './services/test.service';
import TestController from './controllers/test.controller';
import TestRoute from './routes/test.route';

// Tạo container
const container = createContainer();

// Đăng ký vào container
container.register({
    server: asClass(Server).singleton(),
    testService: asClass(TestService).singleton(),
    testController: asClass(TestController).singleton(),
    testRoute: asClass(TestRoute).singleton(),
});

export default container;
