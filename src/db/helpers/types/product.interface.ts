import { Types } from 'mongoose';
import { CategoryInterface } from './category.interface';

interface InventoryInterface {
  quantidade: number;
  precoDeVenda: number;
  precoDeCompra: number;
}

export interface ProductInterface {
  _id: Types.ObjectId;
  nome: string;
  descricao: string;
  imagens: Types.Array<string>;
  estoque: InventoryInterface;
  categorias: Types.DocumentArray<CategoryInterface>;
  createdAt: Date;
  updatedAt: Date;
}
