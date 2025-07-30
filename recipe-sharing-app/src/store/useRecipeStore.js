import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Adds a single recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Sets or replaces the entire recipes array
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

