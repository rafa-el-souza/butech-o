import CRUDService from './crud.service';
import { WorkerModel } from '../models';
import { WorkerInterface } from '../helpers/validation';
import { CreateWorkerInput, DeleteWorkerInput, UpdateWorkerInput } from '../helpers/types';

export class WorkerService
  extends CRUDService<
  WorkerInterface, CreateWorkerInput, UpdateWorkerInput, DeleteWorkerInput
  > {
  constructor(
    model = new WorkerModel(),
  ) { super(model); }

  public create = async (obj: CreateWorkerInput) => this.model.create({ ...obj });

  public read = async () => this.model.read();

  public update = async (obj: UpdateWorkerInput) => this.model.update({ ...obj })
    .then(this.notFound);

  public delete = async (obj: DeleteWorkerInput) => this.model.delete({ ...obj })
    .then(this.notFound);
}
