import { Model as MongooseModel, Document } from 'mongoose';

import { CRUDModelInterface } from '../helpers/types';

export abstract class CRUDModel<
  Output, CreateInput, UpdateInput, DeleteInput
>
implements CRUDModelInterface<
  Output, CreateInput, UpdateInput, DeleteInput
> {
  constructor(
    protected dataBaseModel: MongooseModel<Output & Document>,
  ) { this.dataBaseModel = dataBaseModel; }

  abstract create(obj: CreateInput): Promise<Output>;

  abstract read(): Promise<Array<Output>>;

  abstract update(obj: UpdateInput): Promise<Output | null>;

  abstract delete(obj: DeleteInput): Promise<Output | null>;
}

export default CRUDModel;
