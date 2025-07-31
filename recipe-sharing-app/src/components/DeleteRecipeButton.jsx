import useRecipeStore from './recipeStore'; // if from components folder
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
