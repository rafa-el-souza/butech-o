/* eslint-disable class-methods-use-this */
import CRUDController from './crud.controller';
import { CategoryService } from '../services';
import { createCategoryZodSchema, updateCategoryZodSchema, CategoryInterface } from '../helpers/validation';
import { CreateCategoryInput, DeleteCategoryInput, UpdateCategoryInput } from '../helpers/types';

export class CategoryController
  extends CRUDController<
  CategoryInterface, CreateCategoryInput, UpdateCategoryInput, DeleteCategoryInput
  > {
  constructor(
    service = new CategoryService(),
    _createZodSchema = createCategoryZodSchema,
    _updateZodSchema = updateCategoryZodSchema,
  ) {
    super(service, _createZodSchema, _updateZodSchema);
  }

  public create = async (obj: CreateCategoryInput) => {
    this.validateCreateInput(obj);

    return this.service.create({ ...obj });
  };

  public read = async () => this.service.read();

  public update = async ({ _id, ...rest }: UpdateCategoryInput) => {
    this.validateId(_id);

    this.validateUpdateInput({ ...rest });

    return this.service.update({ _id, ...rest });
  };

  public delete = async ({ _id }: DeleteCategoryInput) => {
    this.validateId(_id);

    return this.service.delete({ _id });
  };
}
