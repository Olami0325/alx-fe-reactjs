import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <h1>Recipe Sharing App</h1>
          <SearchBar />
          <AddRecipeForm />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </div>
      </Router>
      {/* <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
        <h1>🍽️ Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div> */}
    </>
  );
}

export default App;
