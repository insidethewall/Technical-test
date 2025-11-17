import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// @ts-ignore
import "./index.css";
import Layout from "./Layout.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
