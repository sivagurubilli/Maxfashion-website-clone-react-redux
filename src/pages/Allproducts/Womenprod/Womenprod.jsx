import React, { useEffect,useState } from 'react'
import axios from "axios"
import Productbox from '../../../components/productbox/Productbox'
import "./Womenprod.Module.css"
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'


const Womenprod = () => {

    const [wproduct,setwprod] = useState([])

useEffect(()=>{
    axios.get("http://localhost:5000/womencloths").then((r)=>{

    setwprod(r.data)


    })
},[])
    
console.log(wproduct)

  return (
    <>
    <Navbar />

    <br />
    <hr/>

    
    <div className='productcont'>
        {wproduct.map((e)=>{
       return  <Productbox e={e}/>
        })}
    
    </div>
    <br />
    <hr/>
    <Footer />
    </>

  )
}

export default Womenprod