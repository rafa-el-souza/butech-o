import { Types } from 'mongoose';

export interface WorkerInterface {
  _id: Types.ObjectId;
  nome: string;
  email: string;
  senha: string;
  cargo: string;
  createdAt: Date;
  updatedAt: Date;
}
