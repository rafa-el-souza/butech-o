/* eslint-disable class-methods-use-this */
import CRUDController from './crud.controller';
import { WorkerService } from '../services';
import { createWorkerZodSchema, updateWorkerZodSchema, WorkerInterface } from '../helpers/validation';
import { CreateWorkerInput, DeleteWorkerInput, UpdateWorkerInput } from '../helpers/types';

export class WorkerController
  extends CRUDController<
  WorkerInterface, CreateWorkerInput, UpdateWorkerInput, DeleteWorkerInput
  > {
  constructor(
    service = new WorkerService(),
    _createZodSchema = createWorkerZodSchema,
    _updateZodSchema = updateWorkerZodSchema,
  ) {
    super(service, _createZodSchema, _updateZodSchema);
  }

  public create = async (obj: CreateWorkerInput) => {
    this.validateCreateInput(obj);

    return this.service.create({ ...obj });
  };

  public read = async () => this.service.read();

  public update = async ({ _id, ...rest }: UpdateWorkerInput) => {
    this.validateId(_id);

    this.validateUpdateInput({ ...rest });

    return this.service.update({ _id, ...rest });
  };

  public delete = async ({ _id }: DeleteWorkerInput) => {
    this.validateId(_id);

    return this.service.delete({ _id });
  };
}
