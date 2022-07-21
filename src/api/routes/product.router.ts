import CRUDRouter from './crud.router';
import { ProductController } from '../../app/controllers';
import { ProductInterface } from '../../app/helpers/validation';
import { CreateProductInput, DeleteProductInput, UpdateProductInput } from '../../app/helpers/types';

export class ProductRouter extends CRUDRouter<
  ProductInterface, CreateProductInput, UpdateProductInput, DeleteProductInput
> {
  constructor(
    _ProductController = new ProductController(),
  ) {
    super(_ProductController);
  }
}
