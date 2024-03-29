
import { useContext, useState } from "react"
import {createContext}  from "react"
import { CartContext } from "./Cartcontext"

 export const PriceContext = createContext()

export const PriceContextProvider =({children})=>{
 
 const [price,setprice] = useState(0)

 const sumprice =(val)=>{
  setprice(price+val)
}
const sum1price =(val)=>{
  setprice(val)
}

 
 return <PriceContext.Provider value ={{price,sumprice,sum1price}}>
{children}
  </PriceContext.Provider>
}

