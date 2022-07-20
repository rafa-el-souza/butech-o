export interface GenericServiceInterface {
  notFound(output: any): any,
}

export interface CRUDServiceInterface<
  Output, CreateInput, UpdateInput, DeleteInput
> extends GenericServiceInterface {
  create(obj: CreateInput): Promise<Output>;
  read(): Promise<Array<Output>>;
  update(obj: UpdateInput): Promise<Output | null>;
  delete(obj: DeleteInput): Promise<Output | null>;
}

export interface LoginServiceInterface<LoginInput, Worker, LoginOutput> {
  login(obj: LoginInput): LoginOutput | Worker;
}
