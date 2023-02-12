//import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
/**
* @author
* @class Header
**/
import React from 'react'




function Header() {
  

  return (
    <React.Fragment>
        
        {/* register modal starts */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Register Now</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className="modal-body">
                {/* Register form starts*/}
                <form className='onSubmit={this.onSubmit'>
                  <label for="exampleFormControlInput1" className="form-label"></label>
                  <div className="input-group flex-nowrap">
                    <input type="text" className="form-control"  placeholder="Enter Your Name" aria-label="Username" aria-describedby="addon-wrapping" required/>
                  </div>
                  <label for="exampleFormControlInput1" className="form-label"></label>
                  <div className="input-group flex-nowrap">
                    <input type="email" className="form-control"  placeholder="Enter Your Email" aria-label="Email" aria-describedby="addon-wrapping"  required />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"></label>
                    <div className="input-group flex-nowrap">
                      <input type="password" className="form-control"  placeholder="Enter Your Password" aria-label="Password" aria-describedby="addon-wrapping" required />
                    </div>
                  </div>

                  <button type="submit" className="btn mt-3 mb-2 ms-3 btn-success">Submit</button>
                </form>
              </div>

              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
        {/* register modal ends */}

        {/* Login modal starts */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                {/* Login form starts*/}
                <form>
                  <label for="exampleFormControlInput1" className="form-label"></label>
                  <div className="input-group flex-nowrap">
                    <input type="email" className="form-control" placeholder="Enter Your Email" aria-label="Email" aria-describedby="addon-wrapping" required/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"></label>
                    <div className="input-group flex-nowrap">
                      <input type="password" className="form-control" placeholder="Enter Your Password" aria-label="Password" aria-describedby="addon-wrapping" required/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">Login</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
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
                              <a className="nav-link" href="#">Shoes</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Sarees</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Plazzo Pant</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#" >Frocks</a>
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
                      <a href="#" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" >
                        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" height="25px" width="25px" /> Cart</a>
                      </li>
                    </Link>
                    {/* cart ends */}

                    {/* sign-in starts */}
                    <li className="nav-item">
                      <a className="a_b1 " href="#"> <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" height="25px" width="25px" /> Sign in</a>
                      {/* sign-in dropdown starts*/}
                      <ul className='sign-in-list border-bottom'>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Your Account</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Your Orders</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Shortlist</a>
                        </li>
                        <li className='nav-item signin_bottom'>
                          <div className='new_user'>If you are new user</div>
                          <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn bg-success me-4 mt-2" href="#">Register</a>
                          <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#" className='btn btn-danger me-4 mt-5'>Login</a>
                        </li>
                      </ul>
                      {/* sign-in dropdown ends */}
                    </li>
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