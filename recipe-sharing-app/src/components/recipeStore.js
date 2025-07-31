// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Previously used
  recipes: [],
  searchTerm: '',
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ✅ Favorites & Recommendations
  favorites: [],
  recommendations: [],

  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
