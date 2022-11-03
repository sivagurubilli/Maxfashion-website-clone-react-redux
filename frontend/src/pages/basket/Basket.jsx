

import { Checkbox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Productbox from '../../components/productbox/Productbox'
import { CartContext } from '../../context/Cartcontext'
import Bsketprodbox from './Bsketprodbox'
import Checkoutbox from './Checkoutbox'
import { Link } from 'react-router-dom'

import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'


const Basket = () => {
    
    const {cartdata,addcart,deletecart} = useContext(CartContext)

    
  return (
    <>
    <Navbar />
    <br />
    <h2>go to products pages <Link style ={{color:"blue"}}to="/" >click here</Link></h2>
    <div style={{display:"flex"}}>
    <div>
      
        
       {cartdata.length ==0 ? 
       <img style ={{height:"500px",width:"600px",margin:"50px 100px"}} src ={"https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"} /> 
      
       :cartdata.map((el)=>(
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