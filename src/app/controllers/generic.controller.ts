/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';

import { GenericService } from '../services';
import { DomainError } from '../helpers/errors';
import { GenericControllerInterface, ZodSchemas } from '../helpers/types';

export abstract class GenericController<Output>
implements GenericControllerInterface {
  public validateCreateInput: any;

  public validateUpdateInput: any;

  public validateLoginInput: any;

  constructor(
    protected service: GenericService<Output>,
    protected zodSchemas?: ZodSchemas,
  ) {
    if (zodSchemas) this.createValidations(zodSchemas);
  }

  private createValidations = (zodSchemas: ZodSchemas) => {
    if (zodSchemas.create) {
      this.validateCreateInput = (input: any) => zodSchemas.create?.parse(input);
    }
    if (zodSchemas.update) {
      this.validateUpdateInput = (input: any) => zodSchemas.update?.parse(input);
    }
    if (zodSchemas.login) {
      this.validateLoginInput = (input: any) => zodSchemas.login?.parse(input);
    }
  };

  public validateId = (_id: string) => {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new DomainError('Invalid id', 400);
    }
  };
}

export default GenericController;
