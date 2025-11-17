import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
