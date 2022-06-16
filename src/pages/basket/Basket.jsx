

import { Checkbox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Productbox from '../../components/productbox/Productbox'
import { CartContext } from '../../context/Cartcontext'
import Bsketprodbox from './Bsketprodbox'
import Checkoutbox from './Checkoutbox'

import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'


const Basket = () => {
    
    const {cartdata,addcart,deletecart} = useContext(CartContext)

    
  return (
    <>
    <Navbar />
    <div style={{display:"flex"}}>
    <div>
      
        
       {cartdata.map((el)=>(
     <Bsketprodbox key={el._id} e={el}/>
       ))}
             
             </div>
             <div>
                <Checkoutbox />
             </div>

    </div>
    <br />
    <hr />

    <Footer />
    </>
  )
}

export default Basket