import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import LoginWithoutForm from './components/Signin';


function App() {
  // const [token, setToken]=useState(localStorage.getItem("userToken") ?? null);
  // const users=useSelector(state => state.users)
  return (
    <div >
      
     {/* {token ? <div><Home /><Navbar setToken={setToken}/><Footer /></div>: <SignIn token={token} setToken={setToken} />} */}
      <Routes>
        <Route exact path="/" element={<LoginWithoutForm />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/Signin" element={<LoginWithoutForm />} />
      </Routes> 
      {/* {
        users.map(user => <div key={user.id}>{user.name} - {user.email}</div>)
      } */}
      
    </div>
  );
}

export default App;
