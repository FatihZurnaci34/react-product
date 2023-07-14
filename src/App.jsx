import './App.css';
import  Product  from './Components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './Components/Product/ProductList/ProductList';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Product />} />
          <Route path="productlist" element={<ProductList />}   />
              <Route path="/productdetail/:id" element={<ProductDetail />} />          
      </Routes>z
    </BrowserRouter>
  );
}
