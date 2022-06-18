import React, { useEffect,useState } from 'react'
import axios from "axios"
import Productbox from '../../../components/productbox/Productbox'
import "./Womenprod.Module.css"
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import Pagination from '../../Pagination'

import {Button} from "@chakra-ui/react"
const Womenprod = () => {

  const [count,setcount] = useState(0)
  const [totalcount,settotalcount] = useState(0)
const [perpage,setPerpage] = useState([])
const [sortOpt,setSortOpt] = useState({})
    const [wproduct,setwprod] = useState([])


    const handleOpt=(e)=>{
      const {name,value} =  e.target;
      setSortOpt({
        ...sortOpt,
        [name]:value,
      })
    }

    const handleSort =()=>{
      const {val,type} = sortOpt
      if(type=="desc"){
        setPerpage(prev=>[
          ...prev.sort((a,b)=>b.price-a.price)
        ])
      }else if(type =="asc"){
        setPerpage(prev=>[
          ...prev.sort((a,b)=>a.price-b.price)
        ])
      }
    }
    

useEffect(()=>{
    axios.get(`https://maxfashionbackend.herokuapp.com/womencloths`).then((r)=>{
//console.log(r.data.length)
    setwprod(r.data)
    setPerpage(r.data.slice(0,8))

    settotalcount(r.data.length)

    })
},[])




const pageHandler = (pageNumber) =>{
  setPerpage(wproduct.slice((pageNumber*8)-8,pageNumber*8))
}
//console.log(wproduct)

  return (
    <>
    <Navbar />

    <br />
    <hr/>
<div style={{border:"1px solid grey",height:"30px",width:"200px",margin:"20px 150px"}}>
<select
name="type"
value={sortOpt.type}
onChange ={handleOpt}
>

<option>select based on price</option>
  <option value="asc">low to high</option>
  <option value="desc">High to low</option>
</select>

</div>
<div style={{margin:"-50px 0px 0px -500px"}}>
<Button 
onClick={()=>{
  handleSort()
}}>Search</Button>
</div>
<br />
   
    
    <div>
  {wproduct.length>=1?
<div className='productcont'>
    {perpage.map(e =>  <Productbox key={e._id} e={e}/>)}
    <Pagination data = {wproduct} pageHandler={pageHandler}/>
    </div>
:<p>Data not loaded</p>
  }
       
    
    </div>
   
  
    
    <br />
    <hr/>
    <Footer />
    </>

  )
}

export default Womenprod