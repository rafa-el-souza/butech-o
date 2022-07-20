import { WorkerLoginModel } from '../models';
import { LoginInput, LoginOutput } from '../helpers/types';
import { WorkerInterface } from '../helpers/validation';
import LoginService from './login.service';

export class WorkerLoginService extends LoginService<
  LoginInput, WorkerInterface, LoginOutput
> {
  constructor(
    model = new WorkerLoginModel(),
  ) {
    super(model);
  }

  public login = async (obj: LoginInput) => {
    const worker = await this.model.login({ ...obj });
    return this.model.authenticate(worker);
  };
}
