import { NextFunction, Request, Response } from 'express';

export const corsMiddleware = {
  config: (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('access-control-allow-headers', process.env.CORS_HEADERS || '*');
    res.setHeader('access-control-allow-methods', process.env.CORS_METHODS || '*');
    res.setHeader('access-control-allow-origin', process.env.CORS_ORIGIN || '*');
    next();
  },
};
