import React from 'react'
import "./Navbar.Module.css"
import  Topbar  from '../../components/topbar/Topbar'

import { Input,InputGroup, InputLeftAddon } from '@chakra-ui/react'

import {SearchIcon,LockIcon} from  "@chakra-ui/icons"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/Authcontext'
import { UserContext } from '../../Context/Username'


const Navbar = () => {

  const {isAuth,toggleAuth} = useContext(AuthContext)
  const {username,username11} = useContext(UserContext)
 
  return (
    <>    
    <div>{<Topbar />}</div>
    <div className="Nav">
       
        <div className='right'>

            <img style={{height:"40px",width:"70px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png/1920px-Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png"></img>
         <div className ="navlink">
          <Link to="/">Women</Link>
          </div>
          <div className ="navlink">
          <Link to="/mens">men</Link>
          </div> <div className ="navlink">
          <Link to="/mens">boys</Link>
          </div> <div className ="navlink">
          <Link to="/girls">girls</Link>
           </div>

        </div>
        <div className='input'>      
    <InputGroup>
    <InputLeftAddon children= {<SearchIcon/>}/>
    <Input type='text' placeholder='What are you looking for ?' />
  </InputGroup>
  </div>
  <div className='left'>
   
  <Link to="/signup"  >
  {isAuth? username:"signup-signin" }
  </Link>
  <a onClick={()=>{toggleAuth()}}>
  {isAuth? "logout":""}
  </a>
  
<Link to ='/basket'>Basket<span style={{marginLeft:"10px"}}><LockIcon/></span> </Link>
  </div>
    </div>
    </>

  )
  

}

export default Navbar