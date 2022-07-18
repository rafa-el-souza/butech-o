import CRUDModel from './crud.model';
import { productMongooseModel } from '../../db';
import { ProductInterface } from '../helpers/validation';
import { CreateProductInput, DeleteProductInput, UpdateProductInput } from '../helpers/types';

export class ProductModel extends CRUDModel<
  ProductInterface, CreateProductInput, UpdateProductInput, DeleteProductInput
> {
  constructor(
    dataBaseModel = productMongooseModel,
  ) {
    super(dataBaseModel);
  }

  public create = async (obj: CreateProductInput) => this.dataBaseModel.create({ ...obj });

  public read = async () => this.dataBaseModel.find();

  public update = async ({ _id, ...rest }: UpdateProductInput) => this.dataBaseModel
    .findOneAndUpdate({ _id }, { ...rest }, { returnOriginal: false });

  public delete = async ({ _id }: DeleteProductInput) => this.dataBaseModel
    .findOneAndDelete({ _id });
}
