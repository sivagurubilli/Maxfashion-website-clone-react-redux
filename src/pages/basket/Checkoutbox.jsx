

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom'
import { CartContext } from '../../context/Cartcontext'
import { EachPriceContext } from '../../context/Itemprice'
import { PriceContext } from '../../context/Pricecontext'

const Checkoutbox = () => {
 const   navigate = useNavigate()
    const [sum,setsum] = useState(0)
    const {price,sumprice,sum1price} = useContext(PriceContext)
    const {eachprice,eachsumprice} = useContext(EachPriceContext)
    const {cartdata,addcart} = useContext(CartContext)

   
    useEffect(()=>{

        cartdata.map((e)=>{
          setsum(price)
             
         })
    },[price])
        

    


    const gotocheckout=()=>{
       navigate("/checkout")
    }
  return (
    <>
 
    <div style={{margin:"50px 0px",height:"auto",border:"1px solid grey"}}>


        <div style={{width:"400px",border:"1px solid grey",height:"120px",margin:"10px 20px"}}>
 <div style={{display:"flex",margin:"10px 2px"}}>
   <h2>Deliver to</h2> <input placeholder='enter pincode' style={{border:"1px solid grey",marginLeft:"20px"}} /> <button style={{marginLeft:"20px",backgroundColor:"grey",height:"30px",width:"60px"}}>Check</button>
 </div>
 <div style={{backgroundColor:"lightpink",height:"40px",width:"350px",marginLeft:"20px"}}>enter pincode in above box</div>

        </div>
        <div style={{border:"1px solid grey",height:"90px",width:"400px",margin:"20px 20px",display:"flex"}}>
            <img src ={"https://www.maxfashion.in/static/icons/gift-box.png"} />
            <div>
            <h2>offers for you</h2>
            <h4>Choose and apply voucher in 2 simple steps</h4>
            </div>

            </div>
            <div style={{border:"1px solid grey",height:"50px",width:"400px",margin:"20px 20px",display:"flex",justifyContent:"space-between"}}>

<h2>Total MRP :</h2> <h3  style={{marginRight:"30px"}}>₹ {sum}</h3>
</div>
<div style={{border:"1px solid grey",height:"50px",width:"400px",margin:"20px 20px",display:"flex",justifyContent:"space-between"}}>


<h2 >Shipping cost :</h2> <h3 style={{marginRight:"30px"}}>Free shipping</h3>

</div>
<div style={{border:"1px solid grey",height:"50px",width:"400px",margin:"20px 20px",display:"flex",justifyContent:"space-between"}}>
<h2>Total :</h2> <h3 style={{marginRight:"30px"}}>  ₹ {sum}</h3>

</div>

  <button onClick={()=>gotocheckout()} style={{backgroundColor:"blue",width:"100%",height:"50px",color:"white"}}>Checkout</button>


        



    </div>

    </>
  )
}

export default Checkoutbox