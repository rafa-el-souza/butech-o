import { CategoryController } from '../../../app/controllers';
import { CategoryModel } from '../../../app/models';
import { CategoryService } from '../../../app/services';
import { CategoryRouter } from '../../routes';

export const Category = () => new CategoryRouter(
  new CategoryController(new CategoryService(new CategoryModel())),
);
