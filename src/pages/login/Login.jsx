


import React, { Component } from 'react'
import "./Login.Module.css"
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import { BrowserRouter,useNavigate} from "react-router-dom"

import {useState,useContext} from 'react'
import axios from 'axios';
import {AuthContext} from "../../context/Authcontext"
import { UserContext } from '../../Context/Username';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';


const Login = () => {

    const {toggleAuth}= useContext(AuthContext)
 const {username11} = useContext(UserContext)
 
 const navigate = useNavigate();

  const [data2,setData] = useState({
   
    email:"",
    password:""
})

const changeHandler = e =>{
    setData({...data2,[e.target.id]:e.target.value})
}

const submitHandler = e =>{
e.preventDefault();


 
axios.post('http://localhost:5000/login',data2)
.then(
  response => 
  {
    alert(response.data.message)
   if(response.status === 200){
    toggleAuth()
    console.log(response.data)
    username11(response.data.userdata)
      navigate("/")

      setToken(response.data.token)
    }
    
  }
).catch(err=>{
  alert(err.response.data.message)
  navigate("/signup")
})
  

}  
  return (
    <div>
     <Navbar/>

      <img className ="imglog" style={{height:"40px",width:"70px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png/1920px-Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png"></img>

    <form className='formlog' onSubmit = {submitHandler}>
    
                   
    <input  className='inputboxlog' type="email" id="email"
                    placeholder="Enter email Id *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    
                    <input className='inputboxlog' type="password" id="password"
                    placeholder="Enter Password *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                  
     
    
      <br/>
      <button className='buttonlog'>Log In</button>
      </form>
      <br />
      <br />
      <br />
      <hr />
      <br />
     


  
    <Footer />


    </div>
  )
}

export default Login