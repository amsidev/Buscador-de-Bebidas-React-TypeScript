import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinkApiResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from '../utils/recipes-sechema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkApiResponseSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
