import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Service from "./Pages/Service.jsx";
import Contact from "./Pages/Contact.jsx";
import View from "./Pages/View.jsx";
import { ProductProvider } from "./store/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/view" element={<View />} />
          </Route>
          <Route
            path="/*"
            element={<div className="text-center ">Not Found 404</div>}
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>
);
