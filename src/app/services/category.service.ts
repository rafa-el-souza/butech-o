import CRUDService from './crud.service';
import { CategoryModel } from '../models';
import { CategoryInterface } from '../helpers/validation';
import { CreateCategoryInput, DeleteCategoryInput, UpdateCategoryInput } from '../helpers/types';

export class CategoryService
  extends CRUDService<
  CategoryInterface, CreateCategoryInput, UpdateCategoryInput, DeleteCategoryInput
  > {
  constructor(
    model = new CategoryModel(),
  ) { super(model); }

  public create = async (obj: CreateCategoryInput) => this.model.create({ ...obj });

  public read = async () => this.model.read();

  public update = async (obj: UpdateCategoryInput) => this.model.update({ ...obj })
    .then(this.notFound);

  public delete = async (obj: DeleteCategoryInput) => this.model.delete({ ...obj })
    .then(this.notFound);
}
