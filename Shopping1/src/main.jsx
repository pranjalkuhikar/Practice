import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductData from "./context/ProductData.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ProductData>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductData>
);
