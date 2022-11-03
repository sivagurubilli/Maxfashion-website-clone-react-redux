
import { useState } from "react"
import {createContext}  from "react"

 export const CartContext = createContext()


export const CartContextProvider =({children})=>{
 
 const [cartdata,setcartdata] = useState([])
 

 const addcart =(val)=>{

  setcartdata([...cartdata,val])
}

const deletecart =(val)=>{
    const data = cartdata.filter(i => i._id !==val)
    setcartdata([...data])
   
    }

 
 return <CartContext.Provider value ={{cartdata,addcart,deletecart}}>
{children}
  </CartContext.Provider>
}

