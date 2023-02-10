import React, { Component } from 'react';
import '../styles/App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
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
  render() {
    return (
      <div>
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
                  <a href="#" className=''>
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

        <div className="a_main pb-5">
          <div className='container p-0 a_main1 mt-3'>

            <div className='row m-0 a_main1_b1'>
              <div className='col-2 bg-white pe-0 pt-3 pb-3 position-relative'>
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
                          <img src="https://couponswala.com/blog/wp-content/uploads/2021/10/Snapdeal-Upcoming-Sale.jpg" height="160px" width="250px"/>
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

                <div className='a_trending_products'></div>

              </div>

            </div>
          </div>

          <div className='container-fluid a_main2 '>MAIN</div>
        </div>

        <footer>
          <div className='container a_foot1'>
          </div>
          <div className='container a_foot2'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-2 mb-2">
                <li className=""><a href="#">Women: </a></li>
                <li className="ms-1 breadcrumb-item"><a href="https://www.snapdeal.com/products/women-apparel-tops-tunics?sort=plrty">Tops for Women</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Kurti</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#"> Cotton Sarees</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Georgette Sarees</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Chiffon Sarees</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Net Sarees</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Dresses for Women</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Jumpsuit for Women</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Jeans for Women</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className=""><a href="#">Men: </a></li>
                <li className="ms-1 breadcrumb-item"><a href="#">Shirts for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Casual Shirts for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#"> Formal Shirts for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Hoodies for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Cotton Shirts for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">T Shirts for Men </a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#"> Polo T shirts </a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Kurta Pajama for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">White Shirt</a></li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className=""><a href="#">Footwear: </a></li>
                <li className="ms-1 breadcrumb-item"><a href="#">Men's Footwear</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Casual Shoes for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#"> Formal Shoes for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Loafers for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Slippers for Men</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Boots for Men </a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Sandals for Men </a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#">Footwear for Women</a></li>
                <li className="breadcrumb-item" aria-current="page"><a href="#"> Heels for Women</a></li>
              </ol>
            </nav>
            <h4 className="mt-3 footer_head">Abount Snapdeal</h4>
            <p className="mt-2 footer_para">Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts- thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes enabling order deliveries to more than 2500 towns and cities and expanding. Further, Snapdeal's mission is to become India’s value lifestyle omni-channel leader. We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their offline to online shopping journey. Snapdeal is part of the AceVector Group and one of India’s best-known e-commerce companies with an exclusive focus on the value segment.</p>
          </div>
          <div className='container p-0 a_foot3'>
            <div className='row h-100 p-0 m-0'>
              <div className='col-10 tbdr p-2'>
                <span>Copyright © 2021, Snapdeal Limited. All Rights Reserved</span>
              </div>
              <div className='col-2 text-end tbdr p-2'>
                <span>Made with in India <img className="a_heart text-danger" src="https://media.istockphoto.com/id/1128400054/vector/heart-symbol-of-love-and-valentines-day-flat-red-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=COn_iSO6PaIo3SZX1vUfDia4xNQl12SjoLZ_y46I0fY=" height="20px" weight="20px" /></span>
              </div>
            </div>
          </div>

        </footer>
      </div>
    )
  }
}
App.propTypes = {}
export default App