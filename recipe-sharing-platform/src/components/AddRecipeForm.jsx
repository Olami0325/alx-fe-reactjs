function AddRecipeForm() {

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="title">Recipe Title</label>
        <input
          type="text"
          id="title"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          rows="4"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:resize-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="instructions">Preparation Steps</label>
        <textarea
          id="instructions"
          rows="4"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition md:px-6"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
