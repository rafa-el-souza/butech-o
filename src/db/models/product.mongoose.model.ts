import {
  Schema, model as createModel, Document,
} from 'mongoose';
import { ProductInterface } from '../../app/helpers/validation';
import { categorySchema } from './category.mongoose.model';

export interface ProductDocument extends ProductInterface, Document { }

export const productSchema = new Schema<ProductDocument>({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  imagens: { type: [String], required: true },
  estoque: { type: String, required: true },
  categorias: { type: [categorySchema], required: true },
}, { versionKey: false, timestamps: true });

export const mongooseProductModel = createModel('Product', productSchema);
