function RecipeCard({ recipe }) {
  return (
    <div className="bg-gray-900 text-white text-center mx-auto my-4 w-auto max-w-lg p-6 rounded-md shadow-xl transition transform hover:scale-105">
      <img
        src={recipe.image}
        alt="recipe-image"
        className="rounded-md mb-4 w-full object-cover h-48"
      />
      <h1 className="font-bold text-xl mb-4">{recipe.title}</h1>
      <p className="mb-6 font-normal text-teal-200 text-sm">{recipe.summary}</p>
      <a href="#" className="text-blue-500 hover:underline block">View recipe</a>
    </div>
  );
}

export default RecipeCard;
