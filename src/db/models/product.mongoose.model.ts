import { Schema, model as createModel, Document } from 'mongoose';

import { categorySchema } from './category.mongoose.model';
import { InventoryInterface, ProductInterface } from '../../app/helpers/validation';

export interface ProductDocument extends ProductInterface, Document { }

export interface InventoryDocument extends InventoryInterface, Document { }

export const inventorySchema = new Schema<InventoryDocument>({
  quantidade: { type: Number, required: true },
  precoDeCompra: { type: Number, required: true },
  precoDeVenda: { type: Number, required: true },
});

export const productSchema = new Schema<ProductDocument>({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  imagens: { type: [String], required: true },
  estoque: { type: inventorySchema, required: true },
  categorias: { type: [categorySchema], required: true },
}, { versionKey: false, timestamps: true });

export const inventoryMongooseModel = createModel('Inventory', productSchema);

export const productMongooseModel = createModel('Product', productSchema);
