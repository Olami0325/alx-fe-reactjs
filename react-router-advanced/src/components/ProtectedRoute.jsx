// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { fakeAuth } from "../auth";

const ProtectedRoute = ({ children }) => {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If there are nested routes, render Outlet; otherwise render children
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
