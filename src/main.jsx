import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"

import {AuthContextProvider} from "./context/Authcontext"

import {UserContextProvider} from './Context/Username'
import { CartContextProvider } from './context/Cartcontext'
import { PriceContextProvider } from './context/Pricecontext'
import { EachPriceContextProvider } from './context/Itemprice'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
     

    <BrowserRouter>
    <PriceContextProvider> 
    <EachPriceContextProvider>
    <CartContextProvider>
    <AuthContextProvider>
    <UserContextProvider>

 
      <App />
         </UserContextProvider>


    </AuthContextProvider>
    </CartContextProvider>
    </EachPriceContextProvider>
    </PriceContextProvider>
    </BrowserRouter>
  

    </ChakraProvider>

    
  </React.StrictMode>
)
