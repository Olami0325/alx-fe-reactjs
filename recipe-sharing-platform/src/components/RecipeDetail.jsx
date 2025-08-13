import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID
    const found = data.find((item) => String(item.id) === id);
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-red-500">Recipe not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Recipes
      </Link>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Title & Summary */}
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      {/* Ingredients Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx} className="text-gray-800">
              {ing}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, idx) => (
            <li key={idx} className="text-gray-800">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
