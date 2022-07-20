export interface CRUDModelInterface<
  Output, CreateInput, UpdateInput, DeleteInput
> {
  create(obj: CreateInput): Promise<Output>;
  read(): Promise<Array<Output>>;
  update(obj: UpdateInput): Promise<Output | null>;
  delete(obj: DeleteInput): Promise<Output | null>;
}

export interface LoginModelInterface<LoginInput, Worker, LoginOutput>{
  login(obj: LoginInput): Promise<Worker | null> | LoginOutput;
  authenticate(found: Worker | null): LoginOutput;
}
