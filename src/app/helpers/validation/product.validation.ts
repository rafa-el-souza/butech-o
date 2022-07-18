import { z } from 'zod';

import { createCategoryZodSchema } from './category.validation';

export const createProductZodSchema = z.object({
  nome: z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product name must be a string',
  }).min(3, { message: 'Product name must be 3 or more characters long' }),

  descricao: z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product description must be a string',
  }).min(3, { message: 'Product description must be 3 or more characters long' }),

  imagens: z.array(z.string({
    invalid_type_error: 'Imagens must be an array of strings',
  })).max(5),

  estoque: z.object({
    quantidade: z.number(),
    precoDeVenda: z.number(),
    precoDeCompra: z.number(),
  }),

  categorias: z.array(createCategoryZodSchema),
});

export const updateProductZodSchema = z.object({
  nome: z.optional(z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product name must be a string',
  }).min(3, { message: 'Product name must be 3 or more characters long' })),

  descricao: z.optional(z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product description must be a string',
  }).min(3, { message: 'Product description must be 3 or more characters long' })),

  imagens: z.optional(z.array(z.string({
    invalid_type_error: 'Imagens must be an array of strings',
  })).max(5)),

  estoque: z.optional(z.object({
    quantidade: z.number(),
    precoDeVenda: z.number(),
    precoDeCompra: z.number(),
  })),

  categorias: z.optional(z.array(createCategoryZodSchema)),
});

export type ProductInterface = z.infer<typeof createProductZodSchema>;
