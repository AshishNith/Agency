// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser, authLoading } = useAuth();

  if (authLoading) return null; // or a loader/spinner

  return currentUser ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
