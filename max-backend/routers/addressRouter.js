

const useraddress = require("../models/addressmodel")
const router = require("express").Router();


router.post("/",async(req,res)=>{
    try{
      
   const {name,mobileno,pincode,city,state,building,street,cardno,cardname,cvv} = req.body;
    let exist =await useraddress.findOne({mobileno})

if(mobileno.length < 10){
    return res.status(400).send("mobileno is invalid")
}
if(pincode.length<6){
    return res.status(400).send("pincode is invalid")
}


let newUser = new useraddress({
name,
mobileno,
   pincode,
   city,
   state,
   building,
   street,
   cardno,
   cardname,
   cvv

})
 await newUser.save()
res.status(200).send("register succesfully")

}catch(err){
        console.log(err)
        res.status(500).send(err)
    }

});

module.exports =router;