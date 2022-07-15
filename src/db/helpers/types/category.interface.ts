import { Types } from 'mongoose';

export interface CategoryInterface {
  _id: Types.ObjectId;
  nome: string;
  descricao: string;
  createdAt: Date;
  updatedAt: Date;
}
