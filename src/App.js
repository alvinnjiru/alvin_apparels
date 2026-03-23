import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import GetProductsComponent from './components/GetProductsComponent';
import AddProductsComponent from './components/AddProductsComponent';
import OrderProductComponent from './components/OrderProductComponent';
import MakePayment from './components/MakePayment';
import AboutUsComponent from './components/AboutUsComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         
        <header className="App-header">
          <h1>404 Apparels</h1>
        </header>
      </div>

      <Routes>
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/' element={<GetProductsComponent />} />
        <Route path='/addproducts' element={<AddProductsComponent />} />
        <Route path='/order' element={<OrderProductComponent />} />
        <Route path='/makepayment' element={<MakePayment />} />
        <Route path='/aboutus' element={<AboutUsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
