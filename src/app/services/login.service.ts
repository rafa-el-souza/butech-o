import { LoginServiceInterface } from '../helpers/types';
import { LoginModel } from '../models';
import GenericService from './generic.service';

export abstract class LoginService<LoginInput, Worker, LoginOutput>
  extends GenericService<Worker>
  implements LoginServiceInterface<LoginInput, Worker, LoginOutput> {
  constructor(
    protected model: LoginModel<LoginInput, Worker, LoginOutput>,
  ) { super(model); }

  abstract login(obj: LoginInput): LoginOutput;
}

export default LoginService;
