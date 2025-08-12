
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(r => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch(err => console.error('Error loading recipe:', err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {recipe.summary && (
        <p className="text-lg text-gray-700 mb-6">{recipe.summary}</p>
      )}

      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-1">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </section>
      )}

      {recipe.steps && recipe.steps.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal pl-6 space-y-2">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
