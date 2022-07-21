import { Request, Response } from 'express';

import GenericRouter from './generic.router';
import { LoginController } from '../../app/controllers';
import { statusCodes as code } from '../helpers';

export abstract class LoginRouter<LoginInput, Worker, LoginOutput> extends GenericRouter {
  constructor(
    protected controller: LoginController<LoginInput, Worker, LoginOutput>,
  ) {
    super();
  }

  public addRoutes = () => {
    this.router.route('/')
      .post(
        async (req: Request, res: Response) => {
          const data = await this.controller.login(req.body);
          return res.status(code.ok).json(data);
        },
      );
  };
}

export default LoginRouter;
