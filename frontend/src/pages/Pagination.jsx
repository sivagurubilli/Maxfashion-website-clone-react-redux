

import React from 'react'

const Pagination = ({data,pageHandler}) => {
    let pageNumbers =[]
for(let i =1;i<Math.ceil(data.length/8);i++){
    pageNumbers.push(i)
}

  return (
    <>
   
    <div style={{display:"flex"}}>
<p style={{margin:"50px  40px 3px 600px",width:"300px"}}>show more products:</p>
        <center style={{display:"flex",marginTop:"50px"}}>
            {pageNumbers.map(page=>
                <div style={{margin:"20px",height:"30px",width:"40px",border:"1px solid grey",cursor:"pointer",color:"white",backgroundColor:"green"}}
                onClick={()=>pageHandler(page)}>{page}</div>)}
        </center>
    </div>
    </>
  )
}

export default Pagination