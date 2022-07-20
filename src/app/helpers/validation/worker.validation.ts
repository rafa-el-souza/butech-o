import { z } from 'zod';

export const createWorkerZodSchema = z.object({
  nome: z.string({
    required_error: 'Worker nome is required',
    invalid_type_error: 'Worker nome must be a string',
  }).min(3, { message: 'Worker nome must be 3 or more characters long' }),

  email: z.string({
    required_error: 'Worker email is required',
    invalid_type_error: 'Worker email must be a string',
  }).email({ message: 'Worker email must be an email' }),

  senha: z.string({
    required_error: 'Worker senha is required',
    invalid_type_error: 'Worker senha must be a string',
  }).min(8, { message: 'Worker senha must be 8 or more characters long' }),

  cargo: z.string({
    required_error: 'Worker cargo is required',
    invalid_type_error: 'Worker cargo must be a string',
  }).min(3, { message: 'Worker cargo must be 3 or more characters long' }),
});

export const updateWorkerZodSchema = z.object({
  nome: z.optional(z.string({
    required_error: 'Worker nome is required',
    invalid_type_error: 'Worker nome must be a string',
  }).min(3, { message: 'Worker nome must be 3 or more characters long' })),

  email: z.optional(z.string({
    required_error: 'Worker email is required',
    invalid_type_error: 'Worker email must be a string',
  }).email({ message: 'Worker email must be an email' })),

  senha: z.optional(z.string({
    required_error: 'Worker senha is required',
    invalid_type_error: 'Worker senha must be a string',
  }).min(8, { message: 'Worker senha must be 8 or more characters long' })),

  cargo: z.optional(z.string({
    required_error: 'Worker cargo is required',
    invalid_type_error: 'Worker cargo must be a string',
  }).min(3, { message: 'Worker cargo must be 3 or more characters long' })),
});

export type WorkerInterface = z.infer<typeof createWorkerZodSchema>;
