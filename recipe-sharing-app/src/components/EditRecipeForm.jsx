import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleUpdate}>
      <h4>Edit Recipe</h4>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
