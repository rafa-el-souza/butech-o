/* eslint-disable consistent-return */
import jwt, { JwtPayload } from 'jsonwebtoken';

export default {
  auth: async (token: string): Promise<JwtPayload & { role: string }> => {
    const secret = process.env.JWT_SECRET;
    const options = {
      algorithms: [process.env.JWT_ALGORITHM],
      maxAge: process.env.JWT_MAX_AGE,
    };
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret as string, options as {}, (err, decoded) => {
        if (err || !decoded) return reject(err);
        resolve(decoded as JwtPayload & { role: string });
      });
    });
  },
  sign: async (payload: any): Promise<string> => {
    const secret = process.env.JWT_SECRET;
    const options = {
      algorithm: [process.env.JWT_ALGORITHM],
      expiresIn: process.env.JWT_MAX_AGE,
    };
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret as string, options as {}, (err, token) => {
        if (err || !token) return reject(err);
        resolve(token);
      });
    });
  },
};
