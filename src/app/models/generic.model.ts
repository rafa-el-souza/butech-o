import { Model as MongooseModel, Document } from 'mongoose';

export abstract class GenericModel<Output> {
  constructor(
    protected dataBaseModel: MongooseModel<Output & Document>,
  ) { this.dataBaseModel = dataBaseModel; }
}
