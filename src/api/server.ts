import Api from './api';
import {
  Category, Product, Worker, WorkerLogin,
} from './helpers';

const server = new Api();

server.addRouter(WorkerLogin().router, '/login/worker');

server.addRouter(Product().router, '/products');

server.addRouter(Category().router, '/categories');

server.addRouter(Worker().router, '/worker');

server.handleErrors();

export { server };
