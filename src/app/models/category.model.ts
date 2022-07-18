import CRUDModel from './crud.model';
import { categoryMongooseModel } from '../../db';
import { CategoryInterface } from '../helpers/validation';
import { CreateCategoryInput, DeleteCategoryInput, UpdateCategoryInput } from '../helpers/types';

export class CategoryModel extends CRUDModel<
  CategoryInterface, CreateCategoryInput, DeleteCategoryInput, UpdateCategoryInput
> {
  constructor(
    dataBaseModel = categoryMongooseModel,
  ) {
    super(dataBaseModel);
  }

  public create = async (obj: CreateCategoryInput) => this.dataBaseModel.create({ ...obj });

  public read = async () => this.dataBaseModel.find();

  public update = async ({ _id, ...rest }: UpdateCategoryInput) => this.dataBaseModel
    .findOneAndUpdate({ _id }, { ...rest }, { returnOriginal: false });

  public delete = async ({ _id }: DeleteCategoryInput) => this.dataBaseModel
    .findOneAndDelete({ _id });
}
