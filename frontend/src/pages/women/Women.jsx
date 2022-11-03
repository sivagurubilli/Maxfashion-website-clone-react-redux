import React from 'react'
import Freecartdiv from '../../components/Freecartdiv';
import Navbar from '../../components/navbar/Navbar'
import { Slider } from '../../components/slider/Womenslider';
import Footer from '../../components/footer/Footer';
import Giftingzone from '../../components/Giftingzone';
import Connectwithus from '../../components/Connectwithus';
import Shopbycat from '../../components/shop by categeory/Shopbycat';
import Trendingstores from '../../components/tendingstores/Trendingstores';

const Women = () => {
  return (
    <div>
       
        <div>{<Navbar/>}</div>
       <div style={{backgroundColor:"blue",height:"50px",width:"100%", color:"white",textAlign:"center"}}>
       
        <h3 style={{marginTop:"10px",padding:"10px"}}>Free shipping on  all orders above JUST 499/-</h3>


       </div>
       <div  style={{marginTop:"50px"}}>
  

    <Slider />

       </div>
       <Freecartdiv />
       <br/>
  <hr />
  <div className='budgetbuy'>
  <h2 style={{fontSize:"30px",textAlign:"start",margin:"20px 70px"}}>Budget Buy</h2>
 <img style={{width:"85%",margin:"20px 100px"}} src ={"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/department-modularblock-oneBythree-C-Women-02JUNE2022.jpg"}/>
  
  
  </div>
  <br />
 <hr />
 <Shopbycat />
 <br />
 <hr />
  <Trendingstores />
 <br />
 <hr />
  <Giftingzone />
  <br />
 <hr />
  <Connectwithus />
  <br />
 <hr />

 
  <Footer />
        
        </div>
  )
}

export default Women