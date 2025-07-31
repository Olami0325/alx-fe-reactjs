// store/useRecipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // Existing state
  recipes: [],
  searchTerm: '',
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Favorites
  favorites: [],
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
