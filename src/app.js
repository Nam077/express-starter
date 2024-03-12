// index.js
import container from './container';
import Server from './server';

// Mảng chứa tên các router class để giải quyết từ container
const routerClasses = ['testRoute']; // 'testRoute' là khóa đã đăng ký trong container

const server = new Server(container, routerClasses);
server.listen(3000);
