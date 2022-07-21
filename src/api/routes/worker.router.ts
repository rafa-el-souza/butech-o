import { Request, Response } from 'express';
import CRUDRouter from './crud.router';
import { WorkerController } from '../../app/controllers';
import { WorkerInterface } from '../../app/helpers/validation';
import { CreateWorkerInput, DeleteWorkerInput, UpdateWorkerInput } from '../../app/helpers/types';
import { statusCodes as code } from '../helpers';

export class WorkerRouter extends CRUDRouter<
  WorkerInterface, CreateWorkerInput, UpdateWorkerInput, DeleteWorkerInput
> {
  constructor(
    _WorkerController = new WorkerController(),
  ) {
    super(_WorkerController);
    this.addRoutes();
  }

  public addRoutes = () => {
    this.protect();

    this.router.route('/')
      .post(
        async (req: Request, res: Response) => {
          const data = await this.controller.create(req.body);
          return res.status(code.created).json(data);
        },
      )
      .get(
        async (_req: Request, res: Response) => {
          const data = await this.controller.read();
          return res.status(code.ok).json(data);
        },
      )
      .put(
        async (req: Request, res: Response) => {
          const data = await this.controller.update(req.body);
          return res.status(code.ok).json(data);
        },
      )
      .delete(
        async (req: Request, res: Response) => {
          const data = await this.controller.delete(req.body);
          return res.status(code.ok).json(data);
        },
      );
  };
}
