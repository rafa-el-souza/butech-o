import { LoginControllerInterface, ZodSchema } from '../helpers/types';
import { LoginService } from '../services';
import GenericController from './generic.controller';

export abstract class LoginController<LoginInput, Worker, LoginOutput>
  extends GenericController<Worker>
  implements LoginControllerInterface<LoginInput, Worker, LoginOutput> {
  constructor(
    protected service: LoginService<LoginInput, Worker, LoginOutput>,
    protected loginZodSchema: ZodSchema,
  ) { super(service, { login: loginZodSchema }); }

  abstract login(obj: LoginInput): LoginOutput;
}

export default LoginController;
