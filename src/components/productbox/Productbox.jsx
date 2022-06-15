
import React from 'react'
import "./Productbox.Module.css"
const Productbox = ({e}) => {
  return (
    <div>
<div className='proddiv'>

    <img  style={{height:"270px",width:"250px"}} src={e.img}/>
    <h4>₹ {e.price} </h4>
  <h4>{e.name}</h4>
<button className='buttonaddtoc'>Add To Cart</button>
</div>


    </div>
  )
}

export default Productbox