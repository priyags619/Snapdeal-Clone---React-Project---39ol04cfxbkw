//import React, { Component } from 'react';
import React, {useState} from 'react'
import '../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../Pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import CartHome from '../pages/CartHome';
import MensFashionHome from '../pages/MensFashionHome';
//import { CartProvider } from 'react-use-cart';




function App() {
  const [authenticated,setAuthenticated ] = useState(false)
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      
      {/* <CartProvider> */}
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/CartHome" element={<CartHome/>}/> 
      <Route path="/MensFashionHome" element={<MensFashionHome/>}/> 

      {/* </CartProvider> */}

      </Routes>
     </BrowserRouter>

  )
}

export default App
  /*state = {
    x: ''
  }
  handleScroll = () => {
    console.log('ok' + window.scrollY)
    if (window.scrollY >= 50) {
      //add
      this.setState({ x: 'position-fixed top-0 start-0' });
    } else {
      //remove
      this.setState({ x: '' });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }*/
