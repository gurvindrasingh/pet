import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Simulated authentication check — replace with real logic
const useAuth = () => {
  const user = localStorage.getItem("user"); // or use context, Redux, etc.
  return { isAuthenticated: !!user };
};

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login and save current location for redirect after login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
