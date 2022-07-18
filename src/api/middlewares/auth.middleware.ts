import { NextFunction, Request, Response } from 'express';

import jwt from '../helpers/auth.jwt';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    const { role } = await jwt.auth(authorization || '');
    res.locals.authenticated = true;
    res.locals.role = role;
  } catch (error) {
    next(error);
  }
  return next();
};
