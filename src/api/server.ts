import Api from './api';

const server = new Api();

server.handleErrors();

export { server };
