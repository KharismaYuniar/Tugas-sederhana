import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Header from './Component/Header';
import Carousel from './Component/Carousel';
// import Footer from './component/Footer';
import Content from './Component/Content';
import Footer from './Component/Footer';
import Information from './Component/Information';
import Testimoni from './Component/Testimoni';
// import conn_mysql from './database/conn_mysql';

class App extends Component {
 render() {
 return (
 <div>
 <Header />
 <Route path="/Carousel" component={Carousel}/>

 <Route path="/Content" component={Content}/>

 <Route path="/Information" component={Information}/>

 <Route path="/Testimoni" component={Testimoni}/>
 <Footer />


 </div>

 );
 }
}
export default App;

