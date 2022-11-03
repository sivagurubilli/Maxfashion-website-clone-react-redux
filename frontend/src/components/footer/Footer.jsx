import React from 'react'
import "./Footer.Module.css"

import { Input ,InputGroup,InputRightElement,Button } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
      
      <div className='footer1'>
  <div className='footer1r'>
  <h2>Subscribe to our awesome emails.</h2>
  <h4>Get our latest offers and news straight in your inbox.</h4>

  <div>

  <InputGroup>
   
    <Input placeholder='Enter Email Addresss' width="60%"  margin = "20px " />
    <Button width="100px" margin="20px 20px" backgroundColor="black" color="white">Email</Button>
  </InputGroup>
  </div>

  </div>
  <div className='footer1l'>
  <h2>Download our Apps</h2>
  <h4>Shop our products and offers on-the-go.</h4>
  <img style ={{margin:"20px 50px"}} src={"https://github.com/Aakashvani/MaxFashion-Clone/blob/main/resources/app-logo.png?raw=true"} />
   

  </div>
  </div>
  <br/>
  <hr/>

  <div className='footer2'>
   <div className='women'>
  <h2>Women</h2>
  <h4> Tops</h4>
  <h4>Dresses "&" Jumpsuits</h4>
   <h4>Sportswear</h4>
 <h4>Bottoms</h4>
   <h4>Winterwear</h4>
 <h4>Ethnicwear</h4>
 <h4>Lingerie</h4>
 <h4>Sleepwear</h4>
 <h4>Accessories</h4>
  <h4>Shoes</h4>
   </div>

   <div className='men'>
    <h2>Men</h2>
    <h4>Tops</h4>
  <h4>Bottoms</h4>
 <h4>Sportswear</h4>
  <h4>Winterwear</h4>
 <h4>Accessories</h4>
  <h4>Shoes</h4>

   </div>


<div className='boys'>
  <h2>Boys</h2>
<h4>Tops</h4>
<h4>Bottoms</h4>
<h4>Indian Wear</h4>
<h4>Winter Wear</h4>
  <h4>Essentials</h4>
  <h4>Accessories</h4>
 <h4>Shoes</h4>

</div>


<div className='girls'>
  <h2>Girls</h2>
<h4>Tops</h4>
<h4>Bottoms</h4>
<h4>Indian Wear</h4>
<h4>Winter Wear</h4>
  <h4>Essentials</h4>
  <h4>Accessories</h4>
 <h4>Shoes</h4>

</div>

<div className='explore'>
  <h2>Explore</h2>
<h4>Tops</h4>
<h4>Bottoms</h4>
<h4>Indian Wear</h4>
<h4>Winter Wear</h4>
  <h4>Essentials</h4>
  <h4>Accessories</h4>
 <h4>Shoes</h4>

</div>




  </div>
 <br/>
 <hr/>
  <div className='footer3'>
   <div className='about'>
   <h2>About</h2>
  <h4>About us</h4>

  <h4>Write to us</h4>
  <h4>Carrers</h4>
    <h4>Take a tour</h4>
    <h4>Blog</h4>
    <h4>Store Loccator</h4>
    <h4>Landmark Cares</h4>



   </div>

 <div className='home'>
 <h2>Home</h2>

 <h4>Contact us</h4>
<h4>Shipping</h4>
<h4>Returns Process</h4>
<h4>Returns Policy</h4>
<h4>Help Centre</h4>

 </div>
  </div>
  


<br />
<hr/>

<div className='footer4'>
<img style={{height:"40px",width:"70px" ,margin:"20px 200px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png/1920px-Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png"></img>

 <h4 style={{margin:"20px 200px"}}>© 2022 Retail World Limited.</h4>



</div>



    </div>
  )
}

export default Footer