//import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from './pages/Home';
// import Detail from './pages/Detail';
// import Search from './pages/Search';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
import Home from '../Pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';

import React, {useState} from 'react'


function App() {
  const [authenticated,setAuthenticated ] = useState(false)
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
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
