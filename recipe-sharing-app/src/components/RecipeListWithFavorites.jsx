// components/RecipeListWithFavorites.jsx
import useRecipeStore from './recipeStore';

const RecipeListWithFavorites = () => {
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeListWithFavorites;
