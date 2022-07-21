import md5 from 'md5';
import CRUDModel from './crud.model';
import { workerMongooseModel } from '../../db';
import { WorkerInterface } from '../helpers/validation';
import { CreateWorkerInput, DeleteWorkerInput, UpdateWorkerInput } from '../helpers/types';

export class WorkerModel extends CRUDModel<
  WorkerInterface, CreateWorkerInput, UpdateWorkerInput, DeleteWorkerInput
> {
  constructor(
    dataBaseModel = workerMongooseModel,
  ) {
    super(dataBaseModel);
  }

  public create = async ({ senha, ...rest }: CreateWorkerInput) => {
    const passwordHash = md5(senha);
    return this.dataBaseModel.create({ ...rest, senha: passwordHash });
  };

  public read = async () => this.dataBaseModel.find({}, { senha: 0 });

  public update = async ({ _id, ...rest }: UpdateWorkerInput) => this.dataBaseModel
    .findOneAndUpdate({ _id }, { ...rest }, { returnOriginal: false });

  public delete = async ({ _id }: DeleteWorkerInput) => this.dataBaseModel
    .findOneAndDelete({ _id });
}
