import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); 
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required"; 

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      
      console.log({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none md:resize-none"
          />
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none md:resize-none"
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
