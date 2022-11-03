

import { useState } from "react"
import {createContext}  from "react"
 export const AuthContext = createContext()


export const AuthContextProvider =({children})=>{
 
 const [isAuth,setisAuth] = useState(false)
 

 const toggleAuth =()=>{
     setisAuth(!isAuth)
 }
 
 return <AuthContext.Provider value ={{isAuth,toggleAuth}}>
{children}
  </AuthContext.Provider>
}