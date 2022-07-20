import { Schema, model as createModel, Document } from 'mongoose';

import { WorkerInterface } from '../../app/helpers/validation';

export interface WorkerDocument extends WorkerInterface, Document { }

export const workerSchema = new Schema<WorkerDocument>({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cargo: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export const workerMongooseModel = createModel('Worker', workerSchema);
