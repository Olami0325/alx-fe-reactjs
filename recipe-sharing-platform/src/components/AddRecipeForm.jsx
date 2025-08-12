
import { useState } from 'react';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError('All fields are required');
      return;
    }
    setError('');
    console.log({
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      steps: steps.split('.').map(s => s.trim())
    });
    alert('Recipe submitted!');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
          className="w-full border rounded p-2"
        />
        <textarea
          placeholder="Preparation Steps (separate by period)"
          value={steps}
          onChange={e => setSteps(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
