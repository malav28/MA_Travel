import React from "react";
import Logo from "../media/Logo-Ma.png";
import homeslider from "../media/home_slider.jpg";
import elements from "../media/elements.jpg";

function Navbar() {
  return (
    
      <div>
        <div className="super_container">
          <header className="header" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="header_content_inner d-flex flex-row align-items-end justify-content-start">
                    <img src={Logo} className="w-100 h-100" />
                  </div>

                  <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                      <li className="active">
                        <a href="MA Travel.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="destinations.html">Destinations</a>
                      </li>
                      <li>
                        <a href="news.html">News</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="Login.html">Login</a>
                      </li>
                    </ul>
                  </nav>

                  <div className="hamburger ml-auto">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_social d-flex flex-row align-items-center justify-content-start">
          <ul className="d-flex flex-row align-items-start justify-content-start">
            <li>
              <a href="#">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-behance" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Menu */}

        <div className="menu">
          <div className="menu_header d-flex flex-row align-items-center justify-content-start">
            <div className="menu_logo">
              <a href="index.html">MA Travel</a>
            </div>
            <div className="menu_close_container ml-auto">
              <div className="menu_close">
                <div />
                <div />
              </div>
            </div>
          </div>
          <div className="menu_content">
            <ul>
              <li>
                <a href="inex.html">Home</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
              <li>
                <a href="destinations.html">Destinations</a>
              </li>
              <li>
                <a href="news.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu_social">
            <div className="menu_phone ml-auto">Call us: 9409429305</div>
            <ul className="d-flex flex-row align-items-start justify-content-start">
              <li>
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Home */}

        <div className="home">

          {/* Home Slider */}

          <div className="home_slider_container">
            <div className="owl-carousel owl-theme home_slider">
              {/* Slide */}

              <div className="owl-item">
                <div className="background_image">
                  <img src={homeslider} />
                </div>
                <div className="home_slider_content_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_slider_content">
                          <div className="home_title">
                            <h2>Let us take you away</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}

              <div className="owl-item">
                <div className="background_image">
                  <img src={homeslider} />
                <div className="home_slider_content_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_slider_content">
                          <div className="home_title">
                            <h2>Let us take you away</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}

              <div className="owl-item">
                <div className="background_image"/>
                <img src={homeslider} />
                <div className="home_slider_content_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_slider_content">
                          <div className="home_title">
                            <h2>Let us take you away</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home_page_nav">
              <ul className="d-flex flex-column align-items-end justify-content-end">
                <li>
                  <a href="/" data-scroll-to="#destinations">
                    Offers<span>01</span>
                  </a>
                </li>
                <li>
                  <a href="/" data-scroll-to="#testimonials">
                    Testimonials<span>02</span>
                  </a>
                </li>
                <li>
                  <a href="" data-scroll-to="#news">
                    Latest<span>03</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
