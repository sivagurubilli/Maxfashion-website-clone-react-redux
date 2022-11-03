

import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/Cartcontext'
import Ordersumbox1 from './Ordersumbox1'

const Ordersummarybox = () => {
    const {cartdata,addcart,deletecart} = useContext(CartContext)

  return (
    <div>
        <br />
        <h2>Your Order Summary</h2>
<br />
<br />
<hr />

{cartdata.map((e)=>(
    <Ordersumbox1 key = {e._id} el = {e} />
))}


    </div>
  )
}

export default Ordersummarybox