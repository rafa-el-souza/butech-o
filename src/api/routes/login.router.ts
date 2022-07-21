import { Request, Response } from 'express';

import GenericRouter from './generic.router';
import { LoginController } from '../../app/controllers';

export abstract class LoginRouter<LoginInput, Worker, LoginOutput> extends GenericRouter {
  constructor(
    protected controller: LoginController<LoginInput, Worker, LoginOutput>,
  ) {
    super();
    this.addRoutes();
  }

  public addRoutes = () => {
    this.router.route('/login')
      .post(
        async (req: Request, res: Response) => {
          const data = await this.controller.login(req.body);
          return res.status(200).json(data);
        },
      );
  };
}

export default LoginRouter;
