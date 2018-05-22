import React, { Component } from 'react';
import gbr11 from '../gmbr/botol1.jpg';
import gbr12 from '../gmbr/macbook-pro.png';
// import gbr2 from '../gmbr/b.jpg';
// import gbr3 from '../gmbr/22.jpg';
import Content1 from '../Style/Content1.css';
// import {Route, Link} from 'react-router-dom';
// import Information from './Information';
import gbr30 from '../gmbr/arah.png';
import {Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Content extends Component {

// 
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
 <div className="container">

 {/* <Route path="/Information" component={Information}/> */}

<div id="container" className="service">
			<h2>Services</h2>
			<h6>DATES MILK</h6>
		
			<div className="row">
				<div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
					<div className="service-list">
						<div className="service-list-col1">
								
						</div>
						<div className="service-list-col2">
							<h3>Dates Milk</h3>
							<p>Jus kurma dicampur susu merupakan salah satu cara menikmati buah kurma dengan cari fresh dan buatan sendiri yang
								diproses dengan baik dan bersih</p>
						</div>
					</div>
					<div className="service-list">
						<div className="service-list-col1">
							<i className="icon fas fa-phone"></i>
						</div>
						<div className="service-list-col2">
							<h3>Handphone</h3>
							<p>Bisa Melalui Telpon Atau WhatsApp</p>
						</div>
					</div>
					<div className="service-list">
						<div className="service-list-col1">
							<i className="icon fas fa-handshake"></i>
						</div>
						<div className="service-list-col2">
							<h3>COD Cash on Delivery </h3>
							<p> Bisa dianter langsung / bertemu langsung </p>
						</div>
					</div>
					<div className="service-list">
						<div className="service-list-col1">
						{/* <i className="fab fa-accessible-icon"></i> */}
						<i className="icon fas fa-space-shuttle"></i>
						</div>
						<div className="service-list-col2">
							<h3>Kirim Paket</h3>
							<p>Mengirim Via Grab bike atau Gojek</p>
						</div>
					</div>
				</div>
				<figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
					{/* <img src="img/macbook-pro.png" alt=""/> */}
                    <img className="hp" src = {gbr12} />
				</figure>

			</div>
		</div>


<div id="container" className="content" id="milk">
			<div className="row">
				<figure className="col-lg-5 col-sm-4 wow fadeInLeft">
			
        <img className="botol" src = {gbr11} />
				</figure>
				<div className="col-lg-7 col-sm-8 featured-work">
					<h2>DATES MILK</h2>

					<p className="padding-b">Jus kurma dicampur susu merupakan salah satu cara menikmati buah kurma disertai susu. Selain rasanya yang manis dan khas, jus kurma juga memiliki kandungan gizi yang sangat bermanfaat bagi kesehatan tubuh.
					 Bahkan jus kurma susu ini sudah terbukti banyak membantu mengatasi berbagai gangguan kesehatan.
					 Kandung zat besi yang terkandung pada buah kurma memiliki faedah untuk menghindari penyakit kurang darah,
					 sementara kalsium dari kurma berfungsi untuk memastikan pertumbuhan tulang dan gigi dapat berjalan dengan baik.</p>
					<div className="featured-box">
						<div className="featured-box-col1 wow fadeInRight delay-02s">
							<i className="icon fas fa-medkit"></i>
						</div>
						<div className="featured-box-col2 wow fadeInRight delay-02s">
							<h3>Manfaat Untuk Kesehatan</h3>
							<p>Dapat mengatasi insomnia atau susah tidur </p>
							<p>Mengatasi sakit usus besar</p>
							<p>Mengobati lemah otot, pegal-pegal serta lesu</p>
						</div>
					</div>
					<div className="featured-box">
						<div className="featured-box-col1 wow fadeInRight delay-04s">
							<i className="icon fas fa-child"></i>
						</div>
						<div className="featured-box-col2 wow fadeInRight delay-04s">
							<h3>Maanfaat untuk Kesehatan Anak </h3>
							<p>Mempercepat pertumbuhan anak.</p>
							<p>Membantu mengurangi pendarahan saat ibu melahirkan</p>
							<p>Mampu mencerdaskan otak dengan memperkuat daya ingat.</p>
						</div>
					</div>
					<div className="featured-box">
						<div className="featured-box-col1 wow fadeInRight delay-06s">
							<i className="icon fas fa-user-plus"></i>
						</div>
						<div className="featured-box-col2 wow fadeInRight delay-06s">
							<h3>Manfaat Untuk Kesehatan Orang Dewasa</h3>
							<p>Menambah tenaga seksual orang dewasa</p>
							<p></p>
						</div>
					</div>
					<a className="Learn-More" href="#">Learn More</a>
				</div>
			</div>
		</div>

<img className="#arah arah" onClick={this.scrollTots} src = {gbr30}/>
 	

 </div>
 );
 }
}

export default Content;