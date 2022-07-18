import { Request, Response } from 'express';

import GenericRouter from './generic.router';
import { CRUDController } from '../../app/controllers';

export abstract class CRUDRouter <
  Output, CreateInput, UpdateInput, DeleteInput
> extends GenericRouter {
  constructor(
    protected controller: CRUDController<
      Output, CreateInput, UpdateInput, DeleteInput
    >,
  ) {
    super();
    this.addRoutes();
  }

  public addRoutes = () => {
    this.router.route('/')
      .get(
        async (_req: Request, res: Response) => {
          const data = await this.controller.read();
          return res.status(200).json(data);
        },
      );

    this.protect();

    this.router.route('/')
      .post(
        async (req: Request, res: Response) => {
          const data = await this.controller.create(req.body);
          return res.status(201).json(data);
        },
      )
      .put(
        async (req: Request, res: Response) => {
          const data = await this.controller.update(req.body);
          return res.status(200).json(data);
        },
      )
      .delete(
        async (req: Request, res: Response) => {
          const data = await this.controller.delete(req.body);
          return res.status(200).json(data);
        },
      );
  };
}

export default CRUDRouter;
