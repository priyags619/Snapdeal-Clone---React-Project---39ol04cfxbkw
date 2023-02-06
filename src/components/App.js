import React, { Component } from 'react';
import '../styles/App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
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

          <div className='a_header_bottom '>

            <div className="container ps-0">

              <div className='row'>

                <div className=' btn col-3 m-0 ps-0 ms-0'>
                  <a href="#" className=''>
                    <img className=" mb-3 ms-0" src="https://www.snapdeal.com/img/icons/finalFavicon.ico" height="40px" />
                    <snap className='snapdeal  text-white'>snapdeal</snap>
                  </a>
                </div>

                <div className="col-7 ">

                  <form className="mt-3 a_hform ">

                    <div className="row ">

                      <div className='col-md-10 '>
                        <input className='form-control' placeholder='    Search products &amp; brands'></input>
                        <div className='bg-white inputBox position-absolute'>
                          <h4>Trending Searches</h4>
                          <ul className="">
                            <li className="nav-item">
                              <a className="nav-link"  href="#">Shoes</a>
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

                <div className='col-3 '>
                  <ul className="nav a_hbot_nav">
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="#">Cart</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sign in</a>
                    </li>
                  </ul>
                </div>


              </div>

            </div>

          </div>
        </header>

        <div className="a_main pb-5">
          <div className='container p-0 a_main1 mt-3'>
            <div className='row m-0 a_main1_b1'>
              <div className='col-2'>A</div>
              <div className='col-10'>
                <div className='a_slider row'>
                  <div className='col-10'>
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

                  <div className='col-2'>B</div>

                </div>

                <div className='a_trending_products'></div>

              </div>

            </div>
          </div>
          <div className='container-fluid a_main2 '></div>
        </div>

        <footer>
          <div className='container a_foot1'></div>
          <div className='container a_foot2'></div>
          <div className='container a_foot3'></div>

        </footer>
      </div>
    )
  }
}
App.propTypes = {}
export default App

