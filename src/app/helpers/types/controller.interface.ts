import { ZodObject, ZodRawShape } from 'zod';

export interface ZodOutput {
  [x: string]: any;
}

export type ZodSchema = ZodObject<ZodRawShape>;

export type ZodSchemas = {
  create?: ZodSchema;
  update?: ZodSchema;
  login?: ZodSchema;
}

export interface GenericControllerInterface {
  validateCreateInput?(input: any): ZodOutput,
  validateUpdateInput?(input: any): ZodOutput,
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

export interface LoginControllerInterface<LoginInput, Worker, LoginOutput> {
  login(obj: LoginInput): LoginOutput | Worker;
}
