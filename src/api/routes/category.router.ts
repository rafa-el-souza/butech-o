import CRUDRouter from './crud.router';
import { CategoryController } from '../../app/controllers';
import { CategoryInterface } from '../../app/helpers/validation';
import { CreateCategoryInput, DeleteCategoryInput, UpdateCategoryInput } from '../../app/helpers/types';

export class CategoryRouter extends CRUDRouter<
  CategoryInterface, CreateCategoryInput, UpdateCategoryInput, DeleteCategoryInput
> {
  constructor(
    _CategoryController = new CategoryController(),
  ) {
    super(_CategoryController);
  }
}
