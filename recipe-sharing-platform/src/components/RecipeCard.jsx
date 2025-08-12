import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 p-4">
      <img src={recipe.image} alt={recipe.title} className="rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
      <p className="text-gray-700">{recipe.summary}</p>
      <Link
        to={`/recipe/${recipe.id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Recipe
      </Link>
    </div>
  );
}

export default RecipeCard;
