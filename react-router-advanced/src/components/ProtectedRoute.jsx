// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // ✅ Using your useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ Check if user is authenticated

  if (!isAuthenticated) {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, render the child components
  return children;
};

export default ProtectedRoute;
