// index.js
import container from './container';
import Server from './server';
import 'dotenv/config';
// Mảng chứa tên các router class để giải quyết từ container
const routerClasses = ['testRoute', 'categoryRoute']; // 'testRoute' là khóa đã đăng ký trong container
const PORT = process.env.PORT || 3000;
const server = new Server(container, routerClasses);
server.listen(PORT);
