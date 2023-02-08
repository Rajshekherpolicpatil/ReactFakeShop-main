import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import SignIn from './Signin';
import SignUp from './Signup';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [token, setToken]=useState(localStorage.getItem("userToken") ?? null);
  return (
    <div >
    {/* {token ? <div><Home /><Navbar setToken={setToken}/><Footer /></div>: <SignIn token={token} setToken={setToken} />}
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes> */}
      <SignUp/>
    </div>
  );
}

export default App;
