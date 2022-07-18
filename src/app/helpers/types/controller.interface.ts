export interface GenericControllerInterface {
  validateCreateInput(input: any): {
    [x: string]: any;
  },
  validateUpdateInput(input: any): {
    [x: string]: any;
  }
  validateId(id: string): void,
}

export interface CRUDControllerInterface<
  Output, CreateInput, UpdateInput, DeleteInput
> extends GenericControllerInterface {
  create(obj: CreateInput): Promise<Output>;
  read(): Promise<Array<Output>>;
  update(obj: UpdateInput): Promise<Output | null>;
  delete(obj: DeleteInput): Promise<Output | null>;
}
