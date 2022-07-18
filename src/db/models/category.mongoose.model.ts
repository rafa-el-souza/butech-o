import { Schema, model as createModel, Document } from 'mongoose';

import { CategoryInterface } from '../../app/helpers/validation';

export interface CategoryDocument extends CategoryInterface, Document { }

export const categorySchema = new Schema<CategoryDocument>({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export const categoryMongooseModel = createModel('Category', categorySchema);
