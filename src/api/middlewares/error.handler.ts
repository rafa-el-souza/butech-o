/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import { ZodError } from 'zod';

import { statusCodes as code, errorMessages as message } from '../helpers';
import { DomainError } from '../../app/helpers/errors';

export const errorHandler = {
  authError: (
    err: JsonWebTokenError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (err instanceof JsonWebTokenError) {
      console.error(err.message);
      return res.status(code.unauthorized).json({ error: message.unauthorized });
    }
    return next(err);
  },

  domainError: (
    err: DomainError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (err instanceof DomainError) {
      return res.status(err.code).json({ error: err.message });
    }
    return next(err);
  },

  zodDomainError: (
    err: ZodError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const firstIssue = err.issues[0];
    if (err instanceof ZodError) {
      return res.status(code.badRequest)
        .json({ error: firstIssue?.message });
    }
    return next(err);
  },

  internalError: (
    _err: Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
  ) => res.status(code.internalServer).json({ message: message.internalServer }),
};
