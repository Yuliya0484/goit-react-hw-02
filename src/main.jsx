import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App/App.jsx";
import "./index.css";
import "modern-normalize";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//"css.lint.unknownProperties": "ignore",
