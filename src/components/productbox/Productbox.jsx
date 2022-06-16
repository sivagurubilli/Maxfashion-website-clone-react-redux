
import React, { useContext } from 'react'
import { CartContext } from '../../context/Cartcontext'
import { PriceContext } from '../../context/Pricecontext'
import "./Productbox.Module.css"
const Productbox = ({e}) => {

const{cartdata,addcart} = useContext(CartContext)
const {price,sumprice} = useContext(PriceContext)
  const addtocart=(e)=>{
    addcart(e)
sumprice(e.price)
    alert("item added to your cart")
    
  }
 
  return (
    <div>
<div  className='proddiv'>

    <img  style={{height:"270px",width:"250px"}} src={e.img}/>
    <h4>₹ {e.price} </h4>
  <h4>{e.name}</h4>
<button className='buttonaddtoc' onClick={()=>addtocart(e)}>Add To Cart</button>
</div>


    </div>
  )
}

export default Productbox