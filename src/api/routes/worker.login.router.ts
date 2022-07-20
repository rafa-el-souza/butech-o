import LoginRouter from './login.router';
import { WorkerLoginController } from '../../app/controllers';
import { WorkerInterface } from '../../app/helpers/validation';
import { LoginInput, LoginOutput } from '../../app/helpers/types';

export class WorkerLoginRouter extends LoginRouter<
  LoginInput, WorkerInterface, LoginOutput
> {
  constructor(
    _LoginController = new WorkerLoginController(),
  ) {
    super(_LoginController);
  }
}
