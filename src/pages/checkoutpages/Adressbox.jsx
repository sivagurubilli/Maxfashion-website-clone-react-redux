
import { Input,InputGroup,InputLeftAddon } from '@chakra-ui/react'
import React from 'react'

const Adressbox = () => {
  return (
    <div style={{textAlign:"start"}}>
        
        <h2>Add your shiping Address</h2>
        <br />


        <h4>Fulll Name</h4>
        <Input plaeholder = 'enter your name'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />
        <h4>Mobile Number</h4>
        <InputGroup  style={{width:"50%",marginLeft:"30px"}}>
    <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='phone number' />
  </InputGroup>
<br />
<br />
<h4>Pincode</h4>
        <Input plaeholder = 'enter your pincode'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />
        <h4>City</h4>
        <Input plaeholder = 'enter your city'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />
        <h4>State</h4>
        <Input plaeholder = 'enter your state'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />
        <h4>Building name or no</h4>
        <Input plaeholder = 'enter your name'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />
        <h4>Steet name or no</h4>
        <Input plaeholder = 'enter your name'  style={{width:"50%",marginLeft:"30px"}} />
        <br />
        <br />
 <hr />
    </div>
  )
}

export default Adressbox