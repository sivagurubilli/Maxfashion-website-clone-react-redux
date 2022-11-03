


import React, { useContext,useState } from 'react'
import { CartContext } from '../../context/Cartcontext'
import { EachPriceContext } from '../../context/Itemprice'
import { PriceContext } from '../../context/Pricecontext'

const Bsketprodbox = ({e}) => {
   
    const [qty,setqty] = useState(1)
    const {cartdata,addcart,deletecart} = useContext(CartContext)
const {price,sumprice,sum1price} = useContext(PriceContext)
  
 const {eachprice,eachsumprice} = useContext(EachPriceContext)


    const removeitem=(m)=>{
        deletecart(m)
       
        
       sumprice(-e.price)
    }
    const incrqty=()=>{
        if(qty<1){
            return
        }
        setqty(qty+1)
       sumprice(e.price)
       
    }
    const decrqty=()=>{
        if(qty<1){
            return
        }
        setqty(qty-1)
        
        if(price<100){
            return
        }
        sumprice(-e.price)
        
    }

    

  return (
    <div>
     

        <div style={{display:"flex",margin:"40px 100px",border:"1px solid grey"}}>
<img  style ={{height:"200px"}} src={e.img} />
<div style={{margin:"0px 20px",textAlign:"start",width:"300px"}}>
    <h4 style={{marginTop:"20px"}}>{e.name}</h4>
    <h4 style={{marginTop:"20px"}}>₹ {e.price}</h4>
    <h4 style={{marginTop:"20px"}}>Color: {e.color}</h4>
    <h4 style={{marginTop:"20px"}}>Size: {e.size}</h4>
</div>
<div style={{margin:"50px 0px"}}>
<button onClick={()=>removeitem(e._id)} style={{backgroundColor:"blue",borderRadius:"10px",color:"white",height:"30px",width:'100px'}}>remove</button>
<br />
<button onClick={()=>incrqty()} style={{backgroundColor:'blue',borderRadius:"7px",color:"white",margin:"10px 20px",height:"30px",width:'80px'}}>qty +</button >
<br />
{qty}
<br />
 <button  onClick ={()=>decrqty()} style={{backgroundColor:'blue',borderRadius:"7px",color:"white",margin:"10px 20px",height:"30px",width:'80px'}}>qty-</button>

</div>
        </div>
        
    </div>
  )
}

export default Bsketprodbox