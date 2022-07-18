/* eslint-disable class-methods-use-this */
import CRUDModel from '../models/crud.model';
import { DomainError } from '../helpers/errors';
import { GenericServiceInterface } from '../helpers/types';

export abstract class GenericService<
  Output, CreateInput, UpdateInput, DeleteInput
>
implements GenericServiceInterface {
  constructor(
    protected model: CRUDModel<
      Output, CreateInput, UpdateInput, DeleteInput
    >,
  ) { }

  public notFound = (output: any) => {
    if (!output) {
      throw new DomainError('Not found', 404);
    }
    return output;
  };
}

export default GenericService;
