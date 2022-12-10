import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'


import { Input,InputGroup,InputLeftAddon } from '@chakra-ui/react'

import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from "react"
import {Link} from "react-router-dom"

const Paaymentbox = () => {
    const [data1,setData] = useState({
        name:"",
        mobileno:"",
        pincode:"",
        city:"",
        state:"",
        building:"",
        street:"",
        cardname:"",
        cardno:"",
        cvv:""
       
    })

    const { isOpen, onOpen, onClose } = useDisclosure()

    const changeHandler = e =>{
        setData({...data1,[e.target.id]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
       
       
       axios.post("https://maxfashion.onrender.com/checkout",data1)
       
       .then(response =>{
        
        if(response.status===200){
console.log("ok")

           onOpen()
         //alert("your payment is done successfully items will be deliverd to your address with in 5 days")
       }
       }).catch(err=>{
       console.log(err)
       })
       }
      
     
    
       

     
    
  return (

    <div>


<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h2>Your Payment is successfuly compleated and your ordered items will be deliver in 5-7 working days </h2>
            <h2>Thanks for visit max fashion</h2>
            <h2>go to home page <Link style ={{color:"blue"}}to ="/">Products page</Link></h2>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
<form onSubmit={submitHandler}>

<div style={{textAlign:"start"}}>
        
        <h2>Add your shiping Address</h2>
        <br />


        <h4>Fulll Name</h4>
        <Input plaeholder = 'enter your name'  style={{width:"50%",marginLeft:"30px"}} id="name"   onChange={changeHandler} />
        <br />
        <br />
        <h4>Mobile Number</h4>
        <InputGroup  style={{width:"50%",marginLeft:"30px"}}>
    <InputLeftAddon children='+91' />
    <Input type="number" placeholder='phone number' id = "mobileno"  onChange={changeHandler} />
  </InputGroup>
<br />
<br />
<h4>Pincode</h4>
        <Input plaeholder = 'enter your pincode'  style={{width:"50%",marginLeft:"30px"}} id ="pincode"  onChange={changeHandler} />
        <br />
        <br />
        <h4>City</h4>
        <Input plaeholder = 'enter your city'  style={{width:"50%",marginLeft:"30px"}}  id ="city" onChange={changeHandler} />
        <br />
        <br />
        <h4>State</h4>
        <Input plaeholder = 'enter your state'  style={{width:"50%",marginLeft:"30px"}}  id= "state" onChange={changeHandler}/>
        <br />
        <br />
        <h4>Building name or no</h4>
        <Input plaeholder = 'enter your name'  style={{width:"50%",marginLeft:"30px"}} id ="building" onChange={changeHandler}/>
        <br />
        <br />
        <h4>Street name or no</h4>
        <Input plaeholder = 'enter your name'  style={{width:"50%",marginLeft:"30px"}} id ="street"   onChange={changeHandler}/>
        <br />
        <br />
 <hr />
    </div>



        
        <h2 style={{margin:"20px 0px 0px -400px "}}>Select Payment Method</h2>
        <br />
        <hr/>

<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img src ={"https://i1.lmsin.net/website_images/ae/checkout/card-payment.svg"} />
<div  style={{margin:"30px 30px"}}>
<h2>Debit/Credit</h2>
<h4>Use Your Debit/Credit card </h4>

</div>
</div>
<br />
<hr />
<div  style={{display:"flex",margin:"30px 0px"}}>
<input style={{margin:"7px 50px"}} type="radio" />
<h4 style={{margin:"0px -70px"}}>CREDIT CARD</h4>
<input style={{margin:"7px 10px 0px 200px"}} type="radio"/>
<h4 style={{margin:"0px -30px"}}>DEBIT CARD</h4>
</div>

<br />
<hr />
<div style={{textAlign:"start"}}>
<h4>Card Number</h4>
<Input plaeholder = 'enter your cardnumber'  style={{width:"50%",marginLeft:"30px"}}  id ="cardno"  onChange={changeHandler}/>
        <br />
        <br />

        <h4>Name on Card</h4>
<Input plaeholder = 'enter your cardname'  style={{width:"50%",marginLeft:"30px"}} id="cardname"  onChange={changeHandler} />
        <br />
        <br />

<div style={{display:"flex"}} >
<div>
<h4>Expiry date</h4>
<br />
<Input  type={"date"}   style={{width:"50%",marginLeft:"30px"}} />
        
</div>

<div>
<h4>C V V</h4>
<br />
<Input  placeholder='enter c v v' style={{width:"50%",marginLeft:"30px"}}  id="cvv"  onChange={changeHandler}/>
        
</div>
</div>


</div>
<br />
<hr />

<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img style={{height:"50px",margin:"30px 0px"}} src ={"https://i1.lmsin.net/website_images/in/checkout/logo-emi.png"} />
<div  style={{margin:"30px 30px"}}>
<h2>EMI</h2>
<h4>Pay in easy installments </h4>

</div>
</div>
<br />
<hr />


<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img style={{height:"50px",margin:"30px 0px"}} src ={"https://dd311b21463486cea6e6-ba57f67b7c05f7cbe632f35f74bd7340.ssl.cf3.rackcdn.com/Checkout/order_summary.png"} />
<div  style={{margin:"30px 30px"}}>
<h2>Cash on delivery</h2>
<h4>extra 45/- rs</h4>

</div>
</div>
<br />
<hr />






<div style={{display:"flex"}}>
    <input style={{margin:"50px 30px"}} type="radio"/>
<img style={{height:"50px",margin:"30px 0px"}} src ={"https://i1.lmsin.net/website_images/payment/upi.png"} />
<div  style={{margin:"30px 30px"}}>
<h2>UPI</h2>
<h4>Pay with prefer upi id</h4>

</div>
</div>
<br />
<hr />

 <h4 style={{margin:"20px 0px 0px -500px" }}>Get promo code</h4>
 <br />
<hr />

<h4  style={{margin:"20px 0px 0px -500px" }}>have copoun card</h4>
<br />
<hr />


<button  style={{width:"60%",height:"40px",backgroundColor:"blue",color:"wheat"}}>Pay Now</button>

                    

                   
                       
        




<br />
<hr />


</form>


</div>


   
  )

}

export default Paaymentbox