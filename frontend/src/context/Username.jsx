
import { useState } from "react"
import {createContext}  from "react"

 export const UserContext = createContext()


export const UserContextProvider =({children})=>{
 
 const [username,setUsername] = useState('siv')
 

 const username11 =(val)=>{
  setUsername(val)
}

 
 return <UserContext.Provider value ={{username,username11}}>
{children}
  </UserContext.Provider>
}

