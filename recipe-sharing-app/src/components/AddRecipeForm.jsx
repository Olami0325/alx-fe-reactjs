import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addRecipe({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Recipe</h3>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
