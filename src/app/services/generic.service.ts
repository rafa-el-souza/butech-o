/* eslint-disable class-methods-use-this */
import { DomainError } from '../helpers/errors';
import { GenericServiceInterface } from '../helpers/types';
import { GenericModel } from '../models';

export abstract class GenericService<Output>
implements GenericServiceInterface {
  constructor(
    protected model: GenericModel<Output>,
  ) { }

  public notFound = (output: any) => {
    if (!output) {
      throw new DomainError('Not found', 404);
    }
    return output;
  };
}

export default GenericService;
