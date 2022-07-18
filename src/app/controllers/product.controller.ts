/* eslint-disable class-methods-use-this */
import CRUDController from './crud.controller';
import { ProductService } from '../services';
import { createProductZodSchema, updateProductZodSchema, ProductInterface } from '../helpers/validation';
import { CreateProductInput, DeleteProductInput, UpdateProductInput } from '../helpers/types';

export class ProductController
  extends CRUDController<
    ProductInterface, CreateProductInput, UpdateProductInput, DeleteProductInput
  > {
  constructor(
    service = new ProductService(),
    _createZodSchema = createProductZodSchema,
    _updateZodSchema = updateProductZodSchema,
  ) {
    super(service, _createZodSchema, _updateZodSchema);
  }

  public create = async (obj: CreateProductInput) => {
    this.validateCreateInput(obj);

    return this.service.create({ ...obj });
  };

  public read = async () => this.service.read();

  public update = async ({ _id, ...rest }: UpdateProductInput) => {
    this.validateId(_id);

    this.validateUpdateInput({ ...rest });

    return this.service.update({ _id, ...rest });
  };

  public delete = async ({ _id }: DeleteProductInput) => {
    this.validateId(_id);

    return this.service.delete({ _id });
  };
}
