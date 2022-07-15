import { z } from 'zod';

export const createCategoryZodSchema = z.object({
  nome: z.string({
    required_error: 'Product category is required',
    invalid_type_error: 'Product category must be a string',
  }).min(3, { message: 'Product category must be 3 or more characters long' }),
  descricao: z.string({
    required_error: 'Product category is required',
    invalid_type_error: 'Product category must be a string',
  }).min(3, { message: 'Product category must be 3 or more characters long' }),
});

export const updateCategoryZodSchema = z.object({
  nome: z.optional(z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product name must be a string',
  }).min(3, { message: 'Product name must be 3 or more characters long' })),

  descricao: z.optional(z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product name must be a string',
  }).min(3, { message: 'Product name must be 3 or more characters long' })),
});

export type CategoryInterface = z.infer<typeof createCategoryZodSchema>;
