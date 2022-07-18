import { ProductController } from '../../../app/controllers';
import { ProductModel } from '../../../app/models';
import { ProductService } from '../../../app/services';
import { ProductRouter } from '../../routes';

export const Product = () => new ProductRouter(
  new ProductController(new ProductService(new ProductModel())),
);
