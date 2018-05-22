import React, { Component } from 'react';
import Footer1 from '../Style/Footer1.css';


class Footer extends Component {
 render() {
 return (

<footer className="myFooter" >
<div className="container">
<h4 className="footer-copyright">FOLLOW</h4>

</div>
<div className="footer-social">
    <a href="https://www.facebook.com/armanarih.tirtajaya" target="_blank" className="social-icons"><i className="f fab fa-facebook"></i></a>
    <a href="https://www.instagram.com/alzheastore/" target="_blank" className="social-icons"><i className="f fab fa-instagram"></i></a>
    <a href="#" target="_blank" className="social-icons"><i className="f fab fa-twitter"></i></a>

</div>

</footer>

);
}
}

export default Footer;