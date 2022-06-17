import React, { useContext } from 'react'
import Checkoutnav from '../../components/Checkoutnav'
import Footer from '../../components/footer/Footer'
import { PriceContext } from '../../context/Pricecontext'
import Adressbox from './Adressbox'

import "./Checkout.Module.css"
import Ordersummarybox from './Ordersummarybox'
import Paaymentbox from './Paaymentbox'

const Checkoutpage = () => {



 const  {price,sumprice,sum1price} = useContext(PriceContext)
  return (
    <div>
<Checkoutnav />
<div className='checkoutcontainer'>
<div className='checkoutleft'>
   <div style={{display:"flex"}}>
  <div className='homedelbox'>
    <h2>Home Delivery</h2>
    <h4>Get your product delivered to your home.</h4>
  </div>
  <div className='homedelbox'>
<h2>Click & collect</h2>
<h4>Collect your order from a store of your choice</h4>
  </div>
   </div>
   <br />
   <Adressbox />
  <br />
 
 <Paaymentbox />
  <hr />

</div>
<div className='checkoutright'>
 <Ordersummarybox />
 <br />
 <hr />

<div style={{display:"flex",justifyContent:"space-around"}}>

  <h4  style={{marginTop:"20px"}}>Sub Total: </h4> <h4  style={{marginTop:"20px"}}> ₹ {price}</h4>

</div>
<br />
<hr />

<div style={{display:"flex",justifyContent:"space-around"}}>

  <h4  style={{marginTop:"20px"}}>Standard Ground Shipping: </h4> <h4  style={{marginTop:"20px"}}>Free</h4>

</div>
<br />
<hr />
<div style={{display:"flex",justifyContent:"space-around"}}>

  <h4  style={{marginTop:"20px"}}>Total: </h4> <h4  style={{marginTop:"20px"}}>₹{price}</h4>

</div>
<br />
<hr />
<h4  style={{marginTop:"20px"}}>Shipping charges might vary based on delivery location</h4>
<br />
<hr />
</div>

</div>
<br />
<hr />
<Footer />
    </div>
  )
}

export default Checkoutpage