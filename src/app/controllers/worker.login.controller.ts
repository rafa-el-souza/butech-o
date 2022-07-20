import { WorkerLoginService } from '../services';
import { LoginInput, LoginOutput } from '../helpers/types';
import { loginZodSchema, WorkerInterface } from '../helpers/validation';
import LoginController from './login.controller';

export class WorkerLoginController extends LoginController<
  LoginInput, WorkerInterface, LoginOutput
> {
  constructor(
    service = new WorkerLoginService(),
  ) {
    super(service, loginZodSchema);
  }

  public login = async (obj: LoginInput) => {
    this.validateLoginInput(obj);

    return this.service.login({ ...obj });
  };
}
