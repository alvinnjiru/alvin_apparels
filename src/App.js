import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import GetProductsComponent from './components/GetProductsComponent';
import AddProductsComponent from './components/AddProductsComponent';
import EditProductComponent from './components/EditProductComponent';
import OrderProductComponent from './components/OrderProductComponent';
import MakePayment from './components/MakePayment';
import AboutUsComponent from './components/AboutUsComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar';
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";

function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <div className="App">
        </div>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/signup' element={<SignUpComponent />} />
          <Route path='/signin' element={<SignInComponent />} />
          <Route path='/' element={<GetProductsComponent />} />
          <Route path='/addproducts' element={<AddProductsComponent />} />
          <Route path='/editproduct' element={<EditProductComponent />} />
          <Route path='/order' element={<OrderProductComponent />} />
          <Route path='/makepayment' element={<MakePayment />} />
          <Route path='/aboutus' element={<AboutUsComponent />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
