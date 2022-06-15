import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import "./Signin.Module.css"
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Signin = () => {

    const navigate = useNavigate();
    const [data1,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        mobileno:"",
        password:""
    })
    const changeHandler = e =>{
        setData({...data1,[e.target.id]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
     
   
    axios.post("http://localhost:5000/auth",data1)
    
    .then(response =>{
        alert(response.data)
        if(response.status===200){
           navigate('/login')
       }
    }).catch(err=>{
        alert(err.response.data)
       
    })
}
  return (
    <>
   <Navbar />
    <div className='formboxsign'>

<form method='POST' onSubmit = {submitHandler}>
  
<img  style={{height:"40px",width:"70px",margin:"30px 300px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png/1920px-Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png"></img>
<br />
  <input className='inputboxsign' type="name" id="firstname"
                    placeholder="First Name *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <input className='inputboxsign' type="name" id="lastname"
                    placeholder="Last Name *"
                    required
                    onChange={changeHandler}>

                    </input>
                    <br/>
  <input  className='inputboxsign' type="email" id="email"
                    placeholder="Enter email Id *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <input className='inputboxsign' type="number" id="mobileno"
                    placeholder="Mobile Number *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                    <input className='inputboxsign' type="password" id="password"
                    placeholder="Enter Password *"
                    required
                    onChange={changeHandler}>
                    </input>
                    <br/>
                   <button className='buttonsign'>Sign up</button>
                        </form >


    </div>
    <br/>
<br />
 <hr />
 <Footer />
    </>
  )
  
}

export default Signin