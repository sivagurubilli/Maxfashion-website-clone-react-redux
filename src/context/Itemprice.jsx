
import { useContext, useState } from "react"
import {createContext}  from "react"
import { CartContext } from "./Cartcontext"

 export const EachPriceContext = createContext()

export const EachPriceContextProvider =({children})=>{
 
 const [eachprice,seteachprice] = useState(0)

 const eachsumprice =(val)=>{
  seteachprice(eachprice+val)
}

 
 return <EachPriceContext.Provider value ={{eachprice,eachsumprice}}>
{children}
  </EachPriceContext.Provider>
}

