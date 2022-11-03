import React, { useEffect,useState } from 'react'
import axios from "axios"
import Productbox from '../../../components/productbox/Productbox'
import "../Womenprod/Womenprod"
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'


const Mencloths = () => {

    const [wproduct,setwprod] = useState([])

useEffect(()=>{
    axios.get("https://maxfashionbackend.herokuapp.com/mencloths").then((r)=>{

    setwprod(r.data)


    })
},[])
    
//console.log(wproduct)

  return (
    <>
    <Navbar />

    <br />
    <hr/>

    
    <div className='productcont'>
        {wproduct.map((e)=>{
       return  <Productbox key={e._id} e={e}/>
        })}
    
    </div>
    <br />
    <hr/>
    <Footer />
    </>

  )
}

export default Mencloths