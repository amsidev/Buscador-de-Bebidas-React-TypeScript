import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinkApiResponseSchema, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-sechema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkApiResponseSchema>
