
import React, { useContext } from 'react'
import { CartContext } from '../../context/Cartcontext'
import { PriceContext } from '../../context/Pricecontext'
import "./Productbox.Module.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Productbox = ({e}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

const{cartdata,addcart} = useContext(CartContext)
const {price,sumprice} = useContext(PriceContext)
  const addtocart=(e)=>{
    addcart(e)
sumprice(e.price)
   
    onOpen()
    
  }
 
  return (


    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add to cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <h2>Your seleted item is add to your cart successfully </h2>
           <h2>go to cart for payment process<Link style={{color:"blue",marginLeft:"50px"}} to="/basket">cartpage(click here)</Link></h2>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
<div  className='proddiv'>

    <img  style={{height:"270px",width:"280px"}} src={e.img}/>
    <h4>₹ {e.price} </h4>
  <h4>{e.name}</h4>
<button className='buttonaddtoc' onClick={()=>addtocart(e)}>Add To Cart</button>
</div>


    </div>
  )
}

export default Productbox