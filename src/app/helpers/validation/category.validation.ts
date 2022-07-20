import { z } from 'zod';

export const createCategoryZodSchema = z.object({
  nome: z.string({
    required_error: 'Category name is required',
    invalid_type_error: 'Category name must be a string',
  }).min(3, { message: 'Category name must be 3 or more characters long' }),
  descricao: z.string({
    required_error: 'Category description is required',
    invalid_type_error: 'Category description must be a string',
  }).min(3, { message: 'Category description must be 3 or more characters long' }),
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
