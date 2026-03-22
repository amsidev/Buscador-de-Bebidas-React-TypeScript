import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type RecipeSliceType, createRecipeSlice } from './recipeSlice'

export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))