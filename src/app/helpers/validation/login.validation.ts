import { z } from 'zod';

export const loginZodSchema = z.object({
  email: z.string({
    required_error: 'Login email is required',
    invalid_type_error: 'Login email must be a string',
  }).email({ message: 'Login email must be an email' }),

  senha: z.string({
    required_error: 'Login senha is required',
    invalid_type_error: 'Login senha must be a string',
  }).min(8, { message: 'Login senha must be 8 or more characters long' }),
});

export type LoginInterface = z.infer<typeof loginZodSchema>;
