import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Women from './pages/women/Women'
import Men from "./pages/men/Men"
import Girl from './pages/girls/Girls'
import { Route, Routes } from 'react-router-dom'
import Womenprod from './pages/Allproducts/Womenprod/Womenprod'
import Signin from './pages/signin/Signin'
import Login from './pages/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>

        <Route path ="/" element={<Women/>}>  </Route>
        <Route path ="/mens" element ={<Men/>} ></Route>
<Route path ="/girls" element={<Girl/>}></Route>
 <Route path ="/signup" element ={<Signin />}></Route>

 <Route path ="/login" element ={<Login />}></Route>



<Route path='/products/womenprod' element={<Womenprod />}></Route>


      
      </Routes>
    
    
    </div>
  )
}

export default App
