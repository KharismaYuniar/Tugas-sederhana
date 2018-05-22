import React, { Component } from 'react';
import gbr1 from '../gmbr/a.jpg';
import gbr2 from '../gmbr/b.jpg';
import gbr3 from '../gmbr/22.jpg';
import gbr11 from '../gmbr/cc.jpg';
import Header1 from '../Style/Header1.css';
import {Route, Link} from 'react-router-dom';
import {Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Header extends Component {

  scrollToTop() {
    scroll.scrollToTop();
}

scrollToProgram() {
    scroll.scrollTo(1000);
}

scrollToEbook() {
    scroll.scrollTo(1530);
}



 render() {
 return (

  
 <div>

 {/* <!-- Navigation --> */}


 {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top"> <Link to="/" className="kacang"> DATES MILK  </Link></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
           
              <Link to="/" className="nav-link js-scroll-trigger">Beranda</Link>
            </li>
            <li className="nav-item">
            <Link to="/Content" className="nav-link js-scroll-trigger">Tentang</Link>
            </li>
            <li className="nav-item">
              <Link to="/Information" className="nav-link js-scroll-trigger">Information</Link>
            </li>
            <li className="nav-item">
              <Link to="/Testimoni" className="nav-link js-scroll-trigger">Testimoni</Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>   */}



    {/* <a className="nav-link js-scroll-trigger" href="#service">About</a> */}

{/* <br/>
<br/>
<br/> */}


	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="">DATES MILK</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to ="/Carousel" className="nav-link js-scroll-trigger" href="#about">About</Link>
            </li>
            <li className="nav-item">
              <Link to ="/Content" className="nav-link js-scroll-trigger" href="#services">Information</Link>
            </li>
            <li className="nav-item">
              <Link to="/Information" className="nav-link js-scroll-trigger" href="#contact">Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/Testimoni" className="nav-link js-scroll-trigger" href="#contact">Testimonial</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
              <Link to="/" className="nav-link js-scroll-trigger">Beranda</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}

 </div>



 );
 }
}

export default Header;