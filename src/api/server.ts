import Api from './api';
import { Category, Product } from './helpers';

const server = new Api();

server.addRouter(Product().router, '/products');

server.addRouter(Category().router, '/categories');

server.handleErrors();

export { server };
