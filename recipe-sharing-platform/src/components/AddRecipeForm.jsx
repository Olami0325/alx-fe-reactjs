import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); 

  const validate = () => { 
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(","),
      instructions: steps,
      image: "https://via.placeholder.com/150",
    };

    console.log("New recipe submitted:", newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow"
    >
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}

      <textarea
        placeholder="Preparation Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      {errors.steps && <p className="text-red-500">{errors.steps}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
