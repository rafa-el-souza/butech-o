import md5 from 'md5';

import LoginModel from './login.model';
import { workerMongooseModel } from '../../db';
import { LoginInput, LoginOutput } from '../helpers/types';
import { WorkerInterface } from '../helpers/validation';

import { jwt } from '../../api/helpers/auth.jwt';
import { DomainError } from '../helpers/errors';
import { errorMessages as message, statusCodes as code } from '../../api/helpers';

export class WorkerLoginModel extends LoginModel<
  LoginInput, WorkerInterface, LoginOutput
> {
  constructor(
    dataBaseModel = workerMongooseModel,
  ) {
    super(dataBaseModel);
  }

  public login = async ({ email, senha }: LoginInput) => {
    const passwordHash = md5(senha);
    return this.dataBaseModel.findOne({ email, senha: passwordHash });
  };

  // eslint-disable-next-line class-methods-use-this
  public authenticate = async (worker: WorkerInterface | null) => {
    if (!worker) throw new DomainError(message.unauthorized, code.unauthorized);
    const token = await jwt.sign({ role: worker.cargo });
    return { token };
  };
}
