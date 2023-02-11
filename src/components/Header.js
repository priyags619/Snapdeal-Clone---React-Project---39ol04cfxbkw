import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Header
**/

class Header extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div class="modal" id="exampleModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="text-center modal-body p-3 mt-4p">
                <h5>Shopping Cart is empty</h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <header>
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

          <div className='a_header_bottom w-100 ' >

            <div className="container ps-0">

              <div className='row parent'>

                <div className=' btn col-3 m-0 ps-0 ms-0'>
                  <a href="/" className=''>
                    <img className=" mb-3 ms-0" src="https://www.snapdeal.com/img/icons/finalFavicon.ico" height="40px" />
                    <snap className='snapdeal  text-white'>snapdeal</snap>
                  </a>
                </div>

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

                <div className='col-3 right-bar'>
                  <ul className="nav a_hbot_nav ">
                    <li className="nav-item border-start border-end ">
                      <a className=" cart" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" height="20px" width="20px" /> Cart</a>
                    </li>
                    <li className="nav-item">
                      <a className="a_b1 " href="#"> <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" height="25px" width="25px" /> Sign in</a>
                      <ul className='sign-in-list'>

                        <li class="nav-item">
                          <a class="nav-link" href="#">Your Account</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Your Orders</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Shortlist</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}


Header.propTypes = {}
export default Header