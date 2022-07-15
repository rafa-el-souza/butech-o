import 'express-async-errors';

import 'dotenv/config';

import { server } from './server';

server.start(process.env.PORT || '3001');
