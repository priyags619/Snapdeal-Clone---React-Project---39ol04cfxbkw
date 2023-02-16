//import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import React, { useState } from 'react'
import Register from '../pages/Register'

function Header () {
   const[loggedin,setLoggedIn] = useState(localStorage.getItem('authenticated') || false)
  const logOut = () =>{
    console.log("Welcome")
  }
  return(
    <React.Fragment>
    

        {/* Login modal starts */}
       
        {/* login modal ends */}

 {/* cart modal ends */}
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog  modal-dialog-centered">
    <div class="modal-content cart-modal">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <table class="table fs-5 table-dark">
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colspan="2">LOGIN</td>
      <td>name</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">DELIVERY ADDRESS</td>
      <td >address detail</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">REVIEW ORDER</td>
      <td>Product deatil</td>
    </tr>
  </tbody>
</table>

<table class="table ">
  
     <thead className='table-info mt-5'>
    <tr>
      <th scope="col">item Details</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delivery Option</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody className='mt-5'>
    <tr>
      <th >watch</th>
      <td className='text-start'>1</td>
      <td>date</td>
      <td>234</td>
    </tr>
    <tr>
      <td><button>remove</button></td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Remove</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Shopping cart item</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <table class="table ">
  
  <thead className='table-info mt-5'>
 <tr>
   <th scope="col">item Details</th>
   <th scope="col">price</th>
   <th scope="col">Delivery Option</th>
   <th scope="col">Subtotal</th>
 </tr>
</thead>
<tbody className='mt-5'>
 <tr>
   <th >watch</th>
   <td className='text-start'>1</td>
   <td>date</td>
   <td>234</td>
 </tr>
 <tr>
   <td><button>remove</button></td>
 </tr>
</tbody>
</table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-danger" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">PROCEED TO PAY</button>
      </div>
    </div>
  </div>
</div>
        <header>
          {/* Header top starts */}
          <div className='a_header_top p-1'>
            <div className="container p-0">
              <span className="first text-white fs-9">Brand Waali Quality, Bazaar Waali Deal!</span>
              <ul className="nav float-end ">
                <li className="nav-item pb-1">
                  <a className="nav-link active text-white p-1 ps-3" aria-current="page" href="#">Impact@Snapdeal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white p-1 ps-3" href="#">GiftCards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white p-1 ps-3" href="#">HelpCenter</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white p-1 ps-3" href="#">Sell On Snapdeal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white  p-1 ps-3" href="#">
                    <img className="pb-1" src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png" height="20px" alt="..." />
                    Download App</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Header top ends */}

          {/* Header bottom starts */}
          <div className='a_header_bottom w-100 ' >

            <div className="container ps-0">

              <div className='row parent'>

                {/* snapdeal logo starts */}
                <div className=' btn col-3 m-0 ps-0 ms-0'>
                  <a href="/" className=''>
                    <img className=" mb-3 ms-0" src="https://www.snapdeal.com/img/icons/finalFavicon.ico" height="40px" />
                    <snap className='snapdeal  text-white'>snapdeal</snap>
                  </a>
                </div>
                {/* snapdeal logo ends */}

                {/* search-input starts */}
                <div className="col-7 ">

                  <form className="mt-3 a_hform ">

                    <div className="row ">

                      <div className='col-md-10'>
                        <input className='form-control' placeholder='    Search products &amp; brands'></input>
                        <div className='bg-white inputBox position-absolute'>
                          <h5 className=' p-1 mt-1 ms-2'>
                            <img src="https://cdn1.vectorstock.com/i/1000x1000/57/30/single-analytic-icon-increasing-graph-vector-29565730.jpg" height="20px" width="20px" /> Trending Searches</h5>
                          <ul className="list-unstyled ">
                            <li className="nav-item">
                              <a className="nav-link" href="#">Electronic Devices</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Men's Fashion</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Women's Fashion</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#" >Ornaments</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className='col-md-2'>
                        <button type="submit" className='search-btn text-white'>search</button>
                      </div>

                    </div>

                  </form>

                </div>
                {/* search-input starts */}

                {/* cart and sign-in starts */}
                <div className='col-3 right-bar'>
                  <ul className="nav a_hbot_nav ">
                    {/* cart starts */}
                    <Link to="/cart">
                      <li className="nav-item text-white fs-6">
                      <Link to="/cart"> Cart</Link>
                      </li>
                    </Link>
                    {/* cart ends */}

                    {/* sign-in starts */}
                    {loggedin == true ? 
                    <li>
                    <button className="btn btn-danger me-2 mt-5 ms-4" onClick={logOut}>Logout</button>
                  </li>:
                    <li className="nav-item">
                      <a className="a_b1 " href="#"> <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" height="25px" width="25px" /> Sign in</a>
                      {/* sign-in dropdown starts*/}
                      <ul className='sign-in-list border-bottom'>
                        
                        <li className='nav-item signin_bottom'>
                          <div className='new_user mt-5'><h5>If you are new 
                            <div className="text-center me-4">user</div></h5></div>
                          </li>
                          <Link to="/register" className='btn btn-success me-4 mt-3'>SignUp</Link>
                          
                          
                          <Link to="/login"  className='btn btn-danger me-4 mt-3'>Login
                          </Link>
                        
                      </ul>
                      {/* sign-in dropdown ends */}
                    </li>
                  }
                    {/* sign-in ends */}
                  </ul>
                </div>
                {/* cart and sign-in ends */}
              </div>
              {/* row of header b0ttom ends*/}
            </div>
          </div>
          {/* header bottom ends */}
        </header>
      </React.Fragment>
  )
}

export default Header