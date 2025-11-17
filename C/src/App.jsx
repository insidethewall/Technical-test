import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Login } from "./login/Login.js";
import { PrivateRoute } from "./home/component/PrivateRoute.js";
import { Home } from "./home/Home.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
