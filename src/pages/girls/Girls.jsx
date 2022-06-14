import React from 'react'
import Footer from '../../components/footer/Footer';
import Freecartdiv from '../../components/Freecartdiv';
import Navbar from '../../components/navbar/Navbar'
import { Slider } from '../../components/slider/slider';
const Girl = () => {
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

<Footer />
        
        </div>
  )
}

export default Girl