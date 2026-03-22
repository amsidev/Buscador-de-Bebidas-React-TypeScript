import { z } from 'zod'

// entonces se define una constante que sa constante sea el esquema de la respuesta

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkApiResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})
export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkApiResponseSchema)
})