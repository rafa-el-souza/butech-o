import GenericService from './generic.service';
import CRUDModel from '../models/crud.model';
import { CRUDServiceInterface } from '../helpers/types';

export abstract class CRUDService<
  Output, CreateInput, UpdateInput, DeleteInput
> extends GenericService<
  Output, CreateInput, UpdateInput, DeleteInput
> implements CRUDServiceInterface<
  Output, CreateInput, UpdateInput, DeleteInput
> {
  constructor(
    protected model: CRUDModel<
      Output, CreateInput, UpdateInput, DeleteInput
    >,
  ) { super(model); }

  abstract create(obj: CreateInput): Promise<Output>;

  abstract read(): Promise<Array<Output>>;

  abstract update(obj: UpdateInput): Promise<Output | null>;

  abstract delete(obj: DeleteInput): Promise<Output | null>;
}

export default CRUDService;
