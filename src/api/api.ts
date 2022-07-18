import express, { Application, Router } from 'express';

import { connection as connectToDatabase } from '../db';
import { errorHandler, corsMiddleware } from './middlewares';
import { ApiInterface } from './helpers/types';

class Api implements ApiInterface {
  public api: express.Application;

  constructor() {
    this.api = express();
    this.api.use(corsMiddleware.config);
    this.api.use(express.json());
  }

  public start(PORT: string | number): void {
    connectToDatabase();
    this.api.listen(
      PORT,
      () => console.log(`Servindo em 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router, route: string): void {
    this.api.use(route, router);
  }

  public handleErrors(): void {
    this.api.use(errorHandler.authError);
    this.api.use(errorHandler.domainError);
    this.api.use(errorHandler.zodDomainError);
    this.api.use(errorHandler.internalError);
  }

  public getApi(): Application {
    return this.api;
  }
}

export default Api;
