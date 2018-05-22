import React, { Component } from 'react';
import Testimoni1 from '../Style/Testimoni1.css';
import gbr17 from '../gmbr/ts2.jpg';
import gbr18 from '../gmbr/ts3.jpg';
import gbr19 from '../gmbr/ts4.jpg';
import gbr20 from '../gmbr/ts4.jpg';
import gbr30 from '../gmbr/arah.png';
import {Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Testimoni extends Component {

    scrollToTop() {
        scroll.scrollToTop();
    }
    
    scrollToProgram() {
        scroll.scrollTo(1000);
    }
    
    scrollTots() {
        scroll.scrollTo(0);
    }



 render() {
 return (
<div >


{/* <div className="fh5co-testimonial" className="fh5co-bg-section">
<div className="container">
    <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <span>Testimony</span>
            <h2>Happy Clients</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-md-10 col-md-offset-1">
            <div className="row animate-box">
                <div className="owl-carousel owl-carousel-fullwidth">
                    <div className="item">
                        <div className="testimony-slide active text-center">
                            <figure className="figure">
                            <img className="botol2" src = {gbr17}/>
                            </figure>
                            <span>Jean Doe, via <a href="#" className="twitter">Twitter</a></span>
                            <blockquote>
                                <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimony-slide active text-center">
                            <figure>
                            <img className="botol2" src = {gbr17}/>
                            </figure>
                            <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                            <blockquote>
                                <p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimony-slide active text-center">
                            <figure>
                            <img className="botol2" src = {gbr17}/>
                            </figure>
                            <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                            <blockquote>
                                <p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}

 {/* <div className="container">		
	<center><h1>Membuat Carousel dengan Bootstrap | www.malasngoding.com</h1>
	<br/>

	<div className="col-md-8 col-md-offset-2">
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
	
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>		
			</ol>
        

			<div className="carousel-inner" role="listbox">
				<div className="carousel-item active">
                <img className="botol2" src = {gbr17}/>
					<div className="carousel-caption">
						<h3>www.malasngoding.com</h3>
						<p>Tutorial belajar pemrograman web, mobile dan design.</p>
					</div>
				</div>
				<div className="item">
                <img className="botol2" src = {gbr17}/>
					<div class="carousel-caption">
						<h3>Tutorial Bootstrap</h3>
						<p>Belajar tutorial bootstrap dasar di www.malasngoding.com</p>
					</div>
				</div>
				<div className="item">
			    <img className="botol2" src = {gbr17}/>
					<div className="carousel-caption">
						<h3>Tutorial Android</h3>
						<p>Tutorial membuat aplikasi android.</p>
					</div>
				</div>				
			</div>
 
	
			<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
				<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
				<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
      
		</div>
	</div> </center>
   </div> */}


<div className="container">
    <center>
      <h1 className = "ts">Testimonial Pelanggan </h1>
    <br/>
    <div className="col-md-6 col-md-offset-2">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
        </ol>
  

        <div className="carousel-inner" role="listbox">
          <div class="carousel-item active">
          <img className="botol2" src = {gbr17}/>
            <div class="carousel-caption">
                
              
            </div>
          </div>
  
          <div className="carousel-item" > 
          <img className="botol2" src = {gbr18}/>
            <div class="carousel-caption">
             
             
            </div>
          </div>

         <div className="carousel-item" > 
                <img className="botol2" src = {gbr18}/>
             <div class="carousel-caption">    
              
            </div>
         </div>
  
          <div className="carousel-item">
          <img className="botol2" src = {gbr19}/>
            <div class="carousel-caption">
             
          
            </div>
          </div>
        </div>
  
      
        {/* <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> */}

          <a className="carousel-control-prev" href="#myCarousel" role ="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#myCarousel" role ="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    </center>
  </div>
 
  <img className="#arah arah" onClick={this.scrollTots} src = {gbr30}/>


</div>


);
}
}

export default Testimoni;