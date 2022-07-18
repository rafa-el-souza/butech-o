import CRUDService from './crud.service';
import { ProductModel } from '../models';
import { ProductInterface } from '../helpers/validation';
import { CreateProductInput, DeleteProductInput, UpdateProductInput } from '../helpers/types';

export class ProductService
  extends CRUDService<
  ProductInterface, CreateProductInput, UpdateProductInput, DeleteProductInput
  > {
  constructor(
    model = new ProductModel(),
  ) { super(model); }

  public create = async (obj: CreateProductInput) => this.model.create({ ...obj });

  public read = async () => this.model.read();

  public update = async (obj: UpdateProductInput) => this.model.update({ ...obj })
    .then(this.notFound);

  public delete = async (obj: DeleteProductInput) => this.model.delete({ ...obj })
    .then(this.notFound);
}
