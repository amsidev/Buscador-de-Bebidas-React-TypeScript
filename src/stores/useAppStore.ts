import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type RecipeSliceType, createRecipeSlice } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType} from './favoritesSlice'


//create genera el state
export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(devtools((...a) => ({ // con ...a se toma una copia de los argumentos
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a)
})))