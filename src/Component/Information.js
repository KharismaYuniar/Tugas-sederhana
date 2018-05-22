import React, { Component } from 'react';
import Information1 from '../Style/Information1.css';
import gbr17 from '../gmbr/botol1.jpg';
import axios from 'axios';
import swal from 'sweetalert';
import gbr30 from '../gmbr/arah.png';
import {Link,Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import {Route, Link} from 'react-router-dom';
import Susu from './susu';

class Information extends Component {

  scrollToTop() {
    scroll.scrollToTop();
}

scrollToProgram() {
    scroll.scrollTo(1000);
}

scrollTots() {
    scroll.scrollTo(0);
}


  constructor(){
    super();
    this.state={nama:'',hp:'',email:'',alamat:'',rasa:'',produk:'',kurma:[]}
              }

  klik(){
    this.setState({
      nama: this.refs.nama.value,
      hp: this.refs.hp.value,
      email: this.refs.email.value,
      alamat: this.refs.alamat.value,
      rasa: this.refs.rasa.value,
      produk: this.refs.produk.value,
        });
     }


  klik2(){
    var a = this.state.nama;
    var b = this.state.hp;
    var c = this.state.email;
    var d = this.state.alamat;
    var e = this.state.rasa;
    var f = this.state.produk;
    axios.post('http://localhost:3700/data',{
      nama : a,
      hp : b,
      email : c,
      alamat : d,
      rasa : e,
      produk : f,

    })
  }

  // test
  klik3(){
    axios.get('http://localhost:3700/data')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
       kurma: ambilData.data,
      })
    })
  }

  // delete(id){
  //   console.log(id)
  //   axios.delete('http://localhost:3700/'+id).then(res=>{
  //     console.log(res)
  //     swal('item has been remove')
   
  //   })
  // }

  delete= (id)=>{
    console.log(id)
    axios.delete('http://localhost:3700/'+id).then(res=>{
        console.log(res)
        swal('Sudah terhapus, silahkan refresh')
        window.location.reload()
    })
}


 render() {

    const data = this.state.kurma.map((item, index)=>{
      var id = item._id
      var nama = [item.nama]
      var hp = [item.hp]
      var email = [item.email]
      var alamat = [item.alamat]
      var rasa = [item.rasa]
      var produk = [item.produk]
      return <tr key={index}><td>{nama}</td>
      <td>{rasa}</td><td>{produk}</td> <button onClick={()=>{this.delete(id)}}> <i className= "fas fa-trash-alt"></i></button></tr>;
    })

 return (
<div >



	
<div className="text">
  <span>DATES MILK</span>
  <h3>Produk Dates Milk</h3>
  <p>Varian Rasa Produk</p>
</div>
	

 <Susu />


{/* <div className="b container">
    <div class="row">
      <div className="a col-xs-6">
        <div className="card">
            <img className="botol2" src = {gbr17}/>
          <div className="container">
            <p><b>DATES MILK</b></p> 
            <p>Rasa Strawberry</p>
            <p>Rp 15000</p>  
            <a href="#form1" class="btn btn-primary">Go</a>  
    </div>
      </div>
</div>


<div className="a col-xs-6">
      <div className="card">
        <img className="botol2" src = {gbr17}/>
        <div className="container">
        <p><b>DATES MILK</b></p> 
        <p>Rasa Coklat</p> 
        <p>Rp 15000</p> 
          <a href="#form1" class="btn btn-primary">Go</a>  
       
      </div>
        </div>
</div>



<div className="a col-xs-6">
    <div className="card">
      <img className="botol2" src = {gbr17}/>
      <div className="container">
      <p><b>DATES MILK</b></p> 
      <p>Rasa Mocca</p> 
      <p>Rp 15000</p>  
      <a href="#form1" class="btn btn-primary">Go</a>  
        </div>
        </div>
      </div>


    <div className="a col-xs-6">
    <div className="card">
    <img className="botol2" src = {gbr17}/>
    <div className="container">
    <p><b>DATES MILK</b></p> 
    <p>Rasa Vanilla</p> 
    <p>Rp 15000</p>  
    <a href="#form1" class="btn btn-primary">Go</a>  
    </div>
    </div>
    </div>

    <div className="a col-xs-6">
    <div className="card">
    <img className="botol2" src = {gbr17}/>
    <div className="container">
    <p><b>DATES MILK</b></p> 
    <p>Rasa Original</p> 
    <p>Rp 15000</p> 
    <a href="#form1" class="btn btn-primary">Go</a>   
    </div>
    </div>
    </div>



    <div className="a col-xs-6">
    <div className="card">
    <img className="botol2" src = {gbr17}/>
    <div className="container">
    <p><b>DATES MILK</b></p> 
    <p>Rasa Chocolate</p>
    <p>Rp 15000</p> 
    <a href="#form1" class="btn btn-primary">Go</a>  
    </div>
    </div>
    </div>

    </div>
</div>  */}

{/* // form */}

<form className="container" id ="form1">
<div className="formok form-group">
    <label for="inputAddress2">Nama Lengkap</label>
    <input type="text" className="form-control" ref="nama" placeholder="Masukan Nama" onInput={()=>{this.klik();}}/>
  </div>

  <div className="form-group">
    <label for="inputAddress">Masukan Nomor Hp</label>
    <input type="number" className="form-control" ref="hp" placeholder="Nomor Hp" onInput={()=>{this.klik();}}/>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" ref="email" placeholder="Email" onInput={()=>{this.klik();}}/>
    </div>
    
  </div>
  <div className="form-group">
    <label for="inputAddress">Alamat</label>
    <input type="text" className="form-control" ref="alamat" placeholder="Masukan Alamat" onInput={()=>{this.klik();}}/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Varia Rasa</label>
    <input type="text" className="form-control" ref="rasa" placeholder="Masukan Nama" onInput={()=>{this.klik();}}/>
  </div>

   <div className="form-group">
    <label for="inputAddress">Berapa banyak</label>
    <input type="number" className="form-control" ref="produk" placeholder="Banyak Produk" onInput={()=>{this.klik();}}/>
  </div>


 
  <button type="submit" className="btn btn-primary" onClick={()=>{this.klik2();}}>Post</button>
  <br/>
  <br/>

</form>

<img className="#arah arah" onClick={this.scrollTots} src = {gbr30}/>
<br/>
<center>  
<div className="container">
 
    <div className="row">
   
              <button type="submit" className="btn btn-primary " onClick={()=>{this.klik3();}}>Cek Pesanan</button>
            </div>
      <br/>
     
      <tr className="head">
          
            <td>Nama</td>
            {/* <td>hp</td>
            <td>email</td>
            <td>alamat</td> */}
            <td>rasa</td>
            <td>produk</td>
          </tr>
      {data}
    
        

</div>
              
</center>
          

</div>


);
}
}

export default Information;