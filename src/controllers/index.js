import TestController from './TestController';
import { TestService } from '../services';

const testService = new TestService();
const testController = new TestController(testService);

export { testController };
