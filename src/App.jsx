import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Women from './pages/women/Women'
import Men from "./pages/men/Men"
import Girl from './pages/girls/Girls'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>

        <Route path ="/" element={<Women/>}>  </Route>
        <Route path ="/mens" element ={<Men/>} ></Route>
<Route path ="/girls" element={<Girl/>}></Route>
      
      </Routes>
    
    
    </div>
  )
}

export default App
