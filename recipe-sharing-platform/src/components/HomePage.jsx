import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]); // ✅ useState

  useEffect(() => {
    fetch("/data.json") // ✅ data.json
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []); // ✅ useEffect

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Welcome to the Recipe App
      </h1>

      <div className="bg-white shadow-lg p-6 max-w-lg w-full rounded-lg">
        <p className="text-lg mb-4 text-gray-700">
          Browse, add, and manage your recipes easily!
        </p>

        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add New Recipe
        </Link>
      </div>

      {/* ✅ map usage */}
      <div className="mt-8 w-full max-w-2xl">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded mb-4 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
