import express, { Application, Router } from 'express';

import { connection as connectToDatabase } from '../db/connection';
import { ApiInterface } from './helpers/types';
import { corsMiddleware } from './middlewares';

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
    this.api.use((req, res, next) => { next(); });
  }

  public getApi(): Application {
    return this.api;
  }
}

export default Api;
