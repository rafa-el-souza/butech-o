import { WorkerLoginController } from '../../../app/controllers';
import { WorkerLoginModel } from '../../../app/models';
import { WorkerLoginService } from '../../../app/services';
import { WorkerLoginRouter } from '../../routes';

export const WorkerLogin = () => new WorkerLoginRouter(
  new WorkerLoginController(new WorkerLoginService(new WorkerLoginModel())),
);
