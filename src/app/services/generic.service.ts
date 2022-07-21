/* eslint-disable class-methods-use-this */
import { GenericModel } from '../models';
import { DomainError } from '../helpers/errors';
import { GenericServiceInterface } from '../helpers/types';
import { errorMessages as message, statusCodes as code } from '../../api/helpers';

export abstract class GenericService<Output>
implements GenericServiceInterface {
  constructor(
    protected model: GenericModel<Output>,
  ) { }

  public notFound = (output: any) => {
    if (!output) {
      throw new DomainError(message.notFound, code.notFound);
    }
    return output;
  };
}

export default GenericService;
