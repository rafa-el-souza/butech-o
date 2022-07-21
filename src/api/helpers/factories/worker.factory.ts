import { WorkerController } from '../../../app/controllers';
import { WorkerModel } from '../../../app/models';
import { WorkerService } from '../../../app/services';
import { WorkerRouter } from '../../routes';

export const Worker = () => new WorkerRouter(
  new WorkerController(new WorkerService(new WorkerModel())),
);
