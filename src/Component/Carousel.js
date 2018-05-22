import React, { Component } from 'react';
import gbr1 from '../gmbr/a.jpg';
import gbr2 from '../gmbr/b.jpg';
import gbr3 from '../gmbr/22.jpg';
import gbr11 from '../gmbr/cc.jpg';
import Carousel1 from '../Style/Carousel1.css';
import {Route, Link} from 'react-router-dom';
import gbr55 from '../gmbr/fire.jpg';
import gbr56 from '../gmbr/waktu2.png';
import gbr57 from '../gmbr/susu.png';
import gbr58 from '../gmbr/home.png';
import gbr59 from '../gmbr/arman.jpg';
// import gbr55 from '../gmbr/fire.jpg';
import gbr30 from '../gmbr/arah.png';




import {Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Carousel extends Component {

  // scroll arah
	scrollToTop() {
    scroll.scrollToTop();
}

scrollToProgram() {
    scroll.scrollTo(1000);
}

scrollTots() {
    scroll.scrollTo(0);
}

// batas

scrollToTop() {
  scroll.scrollToTop();
}

scrollToProgram() {
  scroll.scrollTo(1000);
}

scrollTomilk() {
  scroll.scrollTo(620);
}


 render() {
 return (
 <div>

 {/* <!-- Navigation --> */}




     <header className ="header" >
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          
          <div className="carousel-item active">
          <img className = "img" src = {gbr1} />
            <div className="carousel-caption d-none d-md-block">
              <h2> Welcome TO DATES MILK </h2>
              <p>	MOMMY ZHEA </p> 
                <a href="#container" onClick={this.scrollTomilk}  className="btn-get-started">Read More</a>
            </div>
          </div>
         

          <div className="carousel-item" >
          <img className = "img" src = {gbr2} />
            <div className="carousel-caption d-none d-md-block">
              <h2> Welcome TO DATES MILK </h2>
              <p>DATES MILK</p>  
                <a href="#milk" onClick={this.scrollTomilk} className="btn-get-started">Read More</a>
            </div>
          </div>

        
          <div className="carousel-item">
          <img className = "img" src = {gbr3} />
            <div className="carousel-caption d-none d-md-block">
              <h2 > Welcome TO DATES MILK </h2>
              <p>DATES MILK</p> 
                <a href="#milk" onClick={this.scrollTomilk} className="btn-get-started">Read More</a>
            </div>
          </div>
        </div>
        
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role ="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleIndicators" role ="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>

{/* <br/>
<br/>
<br/> */}

<div id="page-content">
	
  {/* <!-- ////////////Content Box 01 --> */}
  <section className="box-content box-1" id="nav-services">
    <div className="container">
      <div className="heading">
        <h2>Kenapa Dates Milk</h2>
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <div className="box-item">
            <center>  <img className = "img" src = {gbr56} /></center>
            <h3 className="h3">Since</h3>
            <p>12 Februari Dates Mulai rilis.Dengan dibantu dengan keluarga saya memulai usaha kecil-kecilan ini. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="box-item">
            <center> <img className = "img5" src = {gbr55} /></center>
            <h3 className="h3">Kurma</h3>
            <p>Dibuat dengan bahan kurma pilihan yang baik dan banyak menganduk khasiatnya, yaitu kurma type khalas ("kurma premius") consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="box-item">
            <center> <img className = "img" src = {gbr57} /></center>
            <h3 className="h3">Susu</h3>
            <p>Bahan campuran susu pun di pilih dengan baik dan di pertimbangkan dengan pilihan khasiat atau vitamin yang cukup dan banyak,di pilh susu ultra milk dengan bahan campurannya dan dipilih dengan beberapa bahan rasa mocca strawberry vanila dan coklat.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="box-item">
            <center> <img className = "img" src = {gbr58} /></center>
            <h3 className="h3">Rumahan</h3>
            <p>Dibuat dengan buat sendiri dan di produksi di rumah ,dengan proses yang bersih rapih.dengan alat-alat pembuatan yang bersih dan heginis Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

    
</div>



<section className="bg-light" id="team">
<div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Team Dates Milk</h2>
     
          </div>
        </div>
     
   <div className="row text-center">
        <div className="col-lg-8 mx-auto text-center"> 
          <div className="team-member">
              {/* <img class="mx-auto rounded-circle" src="img/team/1.jpg" alt=""> */}
              <img className = "a mx-auto rounded-circle" src = {gbr59} />
              <h4>Arman Arih Tirtajaya</h4>
              <p className="text-center">Lead Dates Milk</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        {/* <div className="col-lg-8 mx-auto text-center"> 
          <div className="team-member">
              <img className = "a mx-auto rounded-circle" src = {gbr59} />
              <h4>Kay Garland</h4>
              <p className="text-center">Lead Dates Milk</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
     
    </div>
    </div>
    </section>

    

  <img className="#arah arah" onClick={this.scrollTots} src = {gbr30}/>

</div>



 );
 }
}

export default Carousel;