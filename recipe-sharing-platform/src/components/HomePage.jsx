import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 ">
        Welcome to the Recipe App
      </h1>

      <div
        className="bg-white shadow-lg  p-6 max-w-lg w-full rounded-lg "
      >
        <p className="text-lg mb-4 text-gray-700 ">
          Browse, add, and manage your recipes easily!
        </p>
        <Link
          to="/recipes"
          className="bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600 transition"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
}
