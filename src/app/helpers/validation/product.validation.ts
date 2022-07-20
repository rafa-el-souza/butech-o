import { z } from 'zod';

import { createCategoryZodSchema } from './category.validation';

export const inventoryZodSchema = z.object({
  quantidade: z.number({
    required_error: 'Inventory quantity is required',
    invalid_type_error: 'Inventory quantity must be a number',
  }),
  precoDeVenda: z.number({
    required_error: 'Inventory precoDeCompra is required',
    invalid_type_error: 'Inventory precoDeCompra must be a number',
  }),
  precoDeCompra: z.number({
    required_error: 'Inventory precoDeVenda is required',
    invalid_type_error: 'Inventory precoDeVenda must be a number',
  }),
}, {
  required_error: 'Inventory is required',
  invalid_type_error: 'Inventory must be an must have quantidade, precoDeVenda and precoDeCompra',
});

export const createProductZodSchema = z.object({
  nome: z.string({
    required_error: 'Product name is required',
    invalid_type_error: 'Product name must be a string',
  }).min(3, { message: 'Product name must be 3 or more characters long' }),

  descricao: z.string({
    required_error: 'Product description is required',
    invalid_type_error: 'Product description must be a string',
  }).min(3, { message: 'Product description must be 3 or more characters long' }),

  imagens: z.array(z.string({
    invalid_type_error: 'Images must be an array of strings',
  }), { required_error: 'Images are required' }).max(5),

  estoque: inventoryZodSchema,

  categorias: z.array(createCategoryZodSchema, {
    required_error: 'Categories is required',
    invalid_type_error: 'Inventory must be an must have quantidade, precoDeVenda and precoDeCompra',
  }),
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

export type InventoryInterface = z.infer<typeof inventoryZodSchema>

export type ProductInterface = z.infer<typeof createProductZodSchema>;
