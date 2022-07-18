import { Router } from 'express';

import { auth as authMiddleware } from '../middlewares/auth.middleware';

export abstract class GenericRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  abstract addRoutes(): void;

  protected protect(): void {
    this.router.use(authMiddleware);
  }
}

export default GenericRouter;
