import { Model as MongooseModel, Document } from 'mongoose';

import { GenericModel } from './generic.model';
import { LoginModelInterface } from '../helpers/types';

export abstract class LoginModel<LoginInput, Worker, LoginOutput>
  extends GenericModel<Worker>
  implements LoginModelInterface<LoginInput, Worker, LoginOutput> {
  constructor(
    protected dataBaseModel: MongooseModel<Worker & Document>,
  ) { super(dataBaseModel); }

  abstract login(obj: LoginInput): Promise<Worker | null>;

  abstract authenticate(worker: Worker | null): LoginOutput;
}

export default LoginModel;
