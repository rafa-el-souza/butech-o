import Api from './api';
import { Category, Product, WorkerLogin } from './helpers';

const server = new Api();

server.addRouter(WorkerLogin().router, '/worker');

server.addRouter(Product().router, '/products');

server.addRouter(Category().router, '/categories');

server.handleErrors();

export { server };
