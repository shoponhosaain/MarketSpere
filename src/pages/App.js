import "../assets/styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './home';
import Login from './login';
import SignupPage from './signup';
import Product from './Product';
import Categories from './categories';
import Fourzerofore from "./404";
import ProductUploadPage from "./ProductUploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import Search from "./Search";
import PlaceOrder from "./PlaceOrder";
import AdminPage from "./AdminPage";
import OrderViewDetails from "../components/OrderViewDetails";
import Protected from "../components/Protected";


function App() {
  return (
    <>
    
      <BrowserRouter>
      
        <Routes>
          <Route path="/AdminPage" element={<Protected Component={AdminPage}/>} /> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/categories/:name" element={<Categories />} />
          <Route path="/profile" element={<Protected Component={ProfilePage}/>} />
          <Route path="/search/:name" element={<Search/>} />
          <Route path="/product/:name" element={<Protected Component={Product}/>} />
          <Route path="/placeOrder/:name"  element={<Protected Component={PlaceOrder}/>}/>
          <Route path="/orderdetails/:name" element={<Protected Component={OrderViewDetails}/>}/>
          <Route path="/UploadProduct" element={<Protected Component={ProductUploadPage}/>} />
          <Route path="*" element={<Fourzerofore />} />
        </Routes>
        
      </BrowserRouter>
     
    </>
  );
}

export default App;
