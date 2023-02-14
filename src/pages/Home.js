//import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import mala from '../assets/images/mala.jpg'
import watch from '../assets/images/watch.jpg'
import wallet from '../assets/images/wallet.jpg'
import socks from '../assets/images/socks.jpg'
import chopper from '../assets/images/chopper.jpg'
import chappal from '../assets/images/chappal.jpg'
import lighter from '../assets/images/lighter.jpg'
import tshirt from '../assets/images/tshirt.jpg'







function Home() {
  return (
    <Layout>
    <div className="a_main pb-5">
        <div className='container p-0 a_main1 mt-3'>

            <div className='row m-0 a_main1_b1'>
                <div className='col-2 bg-white main_b1_left pe-0 pt-3 pb-3 position-relative'>
                    <h6 className='fs-6'>TOP CATEGORIES</h6>
                    <ul class=" nav flex-column asidenav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Electronics</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>A</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">All offers</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>B</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mobile &amps; tables</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>C</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" >Computrs and gamings</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>D</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" >Home and kitchens</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>E</div>
                        </li>
                    </ul>
                    <h6 className='mt-4 fs-6'>MORE CATEGORIES</h6>
                    <ul class=" nav flex-column asidenav asidenav2">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Men'sFashions</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>A</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Women's Fashions</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>B</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mobile &amps; tables</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>C</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" >Computrs and gamings</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>D</div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" >Home and kitchens</a>
                            <div className='position-absolute top-0 asidenav_rightbox'>E</div>
                        </li>
                    </ul>
                </div>

                <div className='col-10'>

                    <div className='a_slider row'>
                        <div className='col-9'>
                            <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                                <div className="carousel-indicators m-1 justify-content-center">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active m-0" aria-current="true" aria-label="Slide 1">Tees and Polos</button>
                                    <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Boy's Tees</button>
                                    <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Water Bottles</button>
                                    <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">Polo T-Shirts</button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/TShirtsWeb-5d598.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/BoyTeesWeb-ac5f2.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/WBSBWeb-693f9.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://n2.sdlcdn.com/imgs/j/s/y/PoloTShirtsWeb-c1078.jpg" className="d-block w-100" height="270px" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-3 position-relative'>

                            <div className="a_sliderrbox position-absolute top-0 start-0 login">
                                <div className='text-center'>
                                    <div className="a_pinging">
                                        <img src="https://couponswala.com/blog/wp-content/uploads/2021/10/Snapdeal-Upcoming-Sale.jpg" height="160px" width="250px" />
                                    </div>
                                    <div className="pt-3">
                                        <span>Login to your <div>Snapdeal account </div></span>
                                    </div>
                                    <button className=" mt-3 ps-5 pe-5 text-white login">LOG IN</button>
                                </div>
                                <div className='pt-4 ps-2'>
                                    <p className="float-start">New User? <a href="#">Register</a> </p>
                                    <button className="btn btn-secondary pe-2 mb-2 float-end next">NEXT</button>
                                </div>
                            </div>

                        </div>

                    </div>

                  
                    <div className='a_trending_products'>
                        <h3>Trending Products</h3>
                        <div id="carouselExampleControls" className="carousel slide carousel_trending" data-bs-ride="carousel">
                            <div className="carousel-inner text-start">

                                <div className="carousel-item active p-2">
                                    <div className='each-product row m-0 h-100'>
                                        <div className='col tbdr p-0 '>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                                <img className="p-0 m-0 " src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80" width="200px" height="200px"/>
                                                <h6>ajkbkbkjlj</h6>
                                                <h6>jkhnljhln;</h6>
                                            </div>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={tshirt} style={{width:"100%"}}/>
                                            </div>
                                        </div>
                                       
                                        <div className='col tbdr p-0'>
                                            <div className="btn btn-white rounded-0 w-100 h-100">
                                            <img src={mala} style={{width:"100%"}}/>
                                            </div>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">4</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item p-2">
                                    <div className='row m-0 h-100'>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">5</a>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">6</a>
                                        </div>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">7</a>
                                        </div>
                                        <div className='col tbdr p-0'>
                                           <a className="btn btn-white rounded-0 w-100 h-100">8</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item p-2">
                                    <div className='row m-0 h-100'>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">9</a>

                                        </div>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">10</a>

                                        </div>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">11</a>

                                        </div>
                                        <div className='col tbdr p-0'>
                                            <a className="btn btn-white rounded-0 w-100 h-100">12</a>

                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                            </div>
                           
                        </div>
                    </div>



                </div>
            </div>

        </div>
        
        <div className='container-fluid bg-white mt-10 a_main2 '>
            <div className='row m-0 h-100 bg-white'>
                <div className='col-6 p-0 tbdr dld_banner'></div>
                <div className='pt-5 ps-5 col-3 tbdr'>
                    <h1>Download Snapdeal App Now</h1>
                    <div className='pt-3'>Fast, Simple & Delightful.</div>
                    <div>All it takes is 30 seconds to Download.</div>
                    <button className='btn google' style={{ width: '122px', height: '42px' }}></button>
                </div>
                <div className='col-3 p-0 dld_banner_right'>
                </div>
            </div>
        </div>

    </div>
</Layout>
  )
}

export default Home