import { Schema, model as createModel, Document } from 'mongoose';

import { categorySchema } from './category.mongoose.model';
import { ProductInterface } from '../../app/helpers/validation';

export interface ProductDocument extends ProductInterface, Document { }

export const productSchema = new Schema<ProductDocument>({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  imagens: { type: [String], required: true },
  estoque: { type: String, required: true },
  categorias: { type: [categorySchema], required: true },
}, { versionKey: false, timestamps: true });

export const productMongooseModel = createModel('Product', productSchema);
