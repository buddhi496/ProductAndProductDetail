import './App.css';
import ProductList from './Product/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import React, { useState } from 'react';
import ProductDetail from './Product/ProductDetail';
import Cart from './Product/Cart';

  

function App() {
  const [cart, setCart] = useState([]); // Initialize cart state

  // Function to handle adding products to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/productdetail/:productId" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
