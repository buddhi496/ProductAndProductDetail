import './App.css';
import ProductList from './Product/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ProductDetail from './Product/ProductDetail';
import products from "./Product/ProductList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productdetail/:productId" element={<ProductDetail products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
