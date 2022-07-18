import { CreateCategoryInput } from './category.interface';

export interface InventoryInterface {
  quantidade: number,
  precoDeVenda: number,
  precoDeCompra: number,
}

export interface CreateProductInput {
  nome: string,
  descricao: string,
  imagens: string[],
  estoque: InventoryInterface,
  categorias: CreateCategoryInput[];
}

export interface UpdateProductInput extends CreateProductInput {
  _id: string,
}

export interface DeleteProductInput {
  _id: string,
}
