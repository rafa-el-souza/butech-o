export interface CreateWorkerInput {
  nome: string,
  email: string,
  senha: string,
  cargo: string,
}

export interface UpdateWorkerInput extends CreateWorkerInput {
  _id: string,
}

export interface DeleteWorkerInput {
  _id: string,
}
