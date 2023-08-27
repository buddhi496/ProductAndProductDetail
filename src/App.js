import './App.css';
import ProductList from './Product/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ProductDetail from './Product/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
