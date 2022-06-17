


import { Input } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../components/footer/Footer'

const Paaymentbox = () => {
  return (
    <div>
        
        <h2>Select Payment Method</h2>
        <br />
        <hr/>

<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img src ={"https://i1.lmsin.net/website_images/ae/checkout/card-payment.svg"} />
<div  style={{margin:"30px 30px"}}>
<h2>Debit/Credit</h2>
<h4>Use Your Debit/Credit card </h4>

</div>
</div>
<br />
<hr />
<div  style={{display:"flex",margin:"30px 0px"}}>
<input style={{margin:"7px 50px"}} type="radio"/>
<h4 style={{margin:"0px -70px"}}>CREDIT CARD</h4>
<input style={{margin:"7px 10px 0px 200px"}} type="radio"/>
<h4 style={{margin:"0px -30px"}}>DEBIT CARD</h4>
</div>

<br />
<hr />
<div style={{textAlign:"start"}}>
<h4>Card Number</h4>
<Input plaeholder = 'enter your cardnumber'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />

        <h4>Name on Card</h4>
<Input plaeholder = 'enter your cardnumber'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />

<div style={{display:"flex"}} >
<div>
<h4>Expiry date</h4>
<br />
<Input  type={"date"}   style={{width:"50%",marginLeft:"30px"}} />
        
</div>

<div>
<h4>C V V</h4>
<br />
<Input  placeholder='enter c v v' style={{width:"50%",marginLeft:"30px"}} />
        
</div>
</div>


</div>
<br />
<hr />

<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img style={{height:"50px",margin:"30px 0px"}} src ={"https://i1.lmsin.net/website_images/in/checkout/logo-emi.png"} />
<div  style={{margin:"30px 30px"}}>
<h2>EMI</h2>
<h4>Pay in easy installments </h4>

</div>
</div>
<br />
<hr />


<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img style={{height:"50px",margin:"30px 0px"}} src ={"https://dd311b21463486cea6e6-ba57f67b7c05f7cbe632f35f74bd7340.ssl.cf3.rackcdn.com/Checkout/order_summary.png"} />
<div  style={{margin:"30px 30px"}}>
<h2>Cash on delivery</h2>
<h4>extra 45/- rs</h4>

</div>
</div>
<br />
<hr />






<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img style={{height:"50px",margin:"30px 0px"}} src ={"https://i1.lmsin.net/website_images/payment/upi.png"} />
<div  style={{margin:"30px 30px"}}>
<h2>UPI</h2>
<h4>Pay with prefer upi id</h4>

</div>
</div>
<br />
<hr />

 <h4 style={{margin:"20px 0px 0px -500px" }}>Get promo code</h4>
 <br />
<hr />

<h4  style={{margin:"20px 0px 0px -500px" }}>have copoun card</h4>
<br />
<hr />

<button style={{width:"60%",height:"40px",backgroundColor:"blue",color:"wheat"}}>Pay Now</button>
<br />
<hr />

</div>


   
  )
}

export default Paaymentbox