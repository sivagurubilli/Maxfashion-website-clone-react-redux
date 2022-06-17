

import React from 'react'

const Ordersumbox1 = ({el}) => {
  return (

    <div  style={{dispaly:"flex",height:"200px",border:"1px solid grey" ,marginTop:"20px"}}>
        


    <img style={{height:"200px"}} src ={el.img} />


<div style={{margin:"-150px 150px",textAlign:'start'}}>
  <h4>MAX</h4>
  <h4>{el.name}</h4>
  <h4>price:  {el.price}</h4>
  </div>



    </div>
  )
}

export default Ordersumbox1