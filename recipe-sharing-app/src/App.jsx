import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
        <h1>🍽️ Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </>
  );
}

export default App;
