import Api from './api';
import { Product } from './helpers';

const server = new Api();

server.addRouter(Product().router, '/products');

server.handleErrors();

export { server };
