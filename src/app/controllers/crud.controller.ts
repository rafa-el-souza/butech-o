import GenericController from './generic.controller';
import { CRUDService } from '../services';
import { CRUDControllerInterface, ZodSchema } from '../helpers/types';

export abstract class CRUDController<
  Output, CreateInput, UpdateInput, DeleteInput
> extends GenericController<Output>
  implements CRUDControllerInterface<
  Output, CreateInput, UpdateInput, DeleteInput
> {
  constructor(
    protected service: CRUDService<
      Output, CreateInput, UpdateInput, DeleteInput
    >,
    protected createZodSchema: ZodSchema,
    protected updateZodSchema: ZodSchema,
  ) { super(service, { create: createZodSchema, update: updateZodSchema }); }

  abstract create(obj: CreateInput): Promise<Output>;

  abstract read(): Promise<Array<Output>>;

  abstract update(obj: UpdateInput): Promise<Output | null>;

  abstract delete(obj: DeleteInput): Promise<Output | null>;
}

export default CRUDController;
