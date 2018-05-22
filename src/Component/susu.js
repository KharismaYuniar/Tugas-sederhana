import React, { Component } from 'react';
import susu1 from '../Style/susu1.css';
import gbr17 from '../gmbr/botol1.jpg';
import axios from 'axios';
import swal from 'sweetalert';
import gbr30 from '../gmbr/arah.png';
import {Link,Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import {Route, Link} from 'react-router-dom';

class Susu extends Component {

  constructor(){
    super();
    this.state={kurma:[]}
              }

  componentDidMount(){
    axios.get('http://localhost:3700/datag')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
       kurma: ambilData.data,
      })
    })
  }



 render() {

    const data = this.state.kurma.map((item, index)=>{
      var id = item._id
      var nama = [item.nama]
      var rasa = [item.rasa]
      var harga = [item.harga]
      var poto = [item.poto]
      return <div className="card">
      <img className="botol2" src = {poto}/>
    <div className="container">
      <p><b>{nama}</b></p> 
      <p>{rasa}</p>
      <p>{harga}</p>  
      <a href="#form1" class="btn btn-primary">Go</a>  
      </div>
        </div>

    })

 return (
 
      
  
  <div className="b container">
      <div class="row">
          {data}
        </div>
  </div>
  
);
}
}

export default Susu;