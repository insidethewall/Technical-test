import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Login } from "./login/Login.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}></Route>
    </Routes>
  );
}
