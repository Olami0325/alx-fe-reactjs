import { useState } from "react";

const AddRecipeForm = () => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, log the data (or send to API)
    console.log({ title, ingredients, instructions });

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 md:resize-none md:px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 md:resize-none md:px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.instructions && <p className="text-red-500 mt-1">{errors.instructions}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
