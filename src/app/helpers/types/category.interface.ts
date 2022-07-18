export interface CreateCategoryInput {
  nome: string,
  descricao: string,
}

export interface UpdateCategoryInput extends CreateCategoryInput {
  _id: string,
}

export interface DeleteCategoryInput {
  _id: string,
}
