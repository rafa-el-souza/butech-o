/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';
import { ZodObject, ZodRawShape } from 'zod';

import { GenericService } from '../services';
import { DomainError } from '../helpers/errors';
import { GenericControllerInterface } from '../helpers/types';

export abstract class GenericController<
  Output, CreateInput, UpdateInput, DeleteInput
>
implements GenericControllerInterface {
  constructor(
    protected service: GenericService<
      Output, CreateInput, UpdateInput, DeleteInput
    >,
    protected zodCreateSchema: ZodObject<ZodRawShape>,
    protected zodUpdateSchema: ZodObject<ZodRawShape>,
  ) { }

  public validateCreateInput = (input: any) => this.zodCreateSchema.parse(input);

  public validateUpdateInput = (input: any) => this.zodUpdateSchema.parse(input);

  public validateId = (_id: string) => {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new DomainError('Invalid id', 400);
    }
  };
}

export default GenericController;
