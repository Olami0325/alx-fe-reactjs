import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  setRecipes: (newRecipes) => set((state) => ({
    recipes: newRecipes,
    filteredRecipes: newRecipes.filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  addRecipe: (recipe) => set((state) => {
    const newRecipes = [...state.recipes, recipe];
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  deleteRecipe: (id) => set((state) => {
    const newRecipes = state.recipes.filter(r => r.id !== id);
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  updateRecipe: (updated) => set((state) => {
    const updatedRecipes = state.recipes.map((r) =>
      r.id === updated.id ? updated : r
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  }))
}));

export default useRecipeStore;
