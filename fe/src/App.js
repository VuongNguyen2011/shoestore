import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Home from "./pages/Product/Home";
import EditProduct from "./pages/Product/EditProduct";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/AddProduct">Product</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AddProduct" element={<Product />}></Route>
        <Route path="/edit-product/:id" element={<EditProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
