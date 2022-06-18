

import React from 'react'

const Pagination = ({data,pageHandler}) => {
    let pageNumbers =[]
for(let i =1;i<Math.ceil(data.length/8);i++){
    pageNumbers.push(i)
}

  return (
    <div style={{marginLeft:"00px",textAlign:"end",display:"flex"}}>
<p style={{margin:"20px  2px 3px 700px"}}>pages:</p>
        <center style={{display:"flex",marginLeft:"00px"}}>
            {pageNumbers.map(page=>
                <div style={{margin:"20px",height:"30px",width:"40px",border:"1px solid grey",color:"white",backgroundColor:"green"}}
                onClick={()=>pageHandler(page)}>{page}</div>)}
        </center>
    </div>
  )
}

export default Pagination