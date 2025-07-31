import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  recommendations: [],

  // CRUD operations
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
      recommendations: state.recommendations.filter((rec) => rec.id !== id),
    })),

  // For setting fetched data
  setRecipes: (recipes) => set({ recipes }),

  // Search
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Favorites
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Recommendations
  setRecommendations: (recs) => set({ recommendations: recs }),
}));

export default useRecipeStore;
