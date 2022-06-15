import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"

import {AuthContextProvider} from "./context/Authcontext"
import {UserContextProvider} from './Context/Username'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    <AuthContextProvider>
    <UserContextProvider>

 
      <App />
      
    </UserContextProvider>


    </AuthContextProvider>
     
    </BrowserRouter>
  
    </ChakraProvider>
    
  </React.StrictMode>
)
