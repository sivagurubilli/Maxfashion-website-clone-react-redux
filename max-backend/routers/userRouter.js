const Reguser = require("../models/usermodel")
const router = require("express").Router();


router.post("/",async(req,res)=>{
    try{
      
   const {firstname,lastname,email,
    mobileno,password} = req.body;
    let exist =await Reguser.findOne({email})
if(exist){
    return res.status(400).send("user already exists")
}
if(mobileno.length < 10){
    return res.status(400).send("mobileno is invalid")
}
if(password.length < 6){
    return res.status(400).send("password must grater then  6 characters")
}

let newUser = new Reguser({
    firstname,
    lastname,
    email,
    mobileno,
    password,

})
 await newUser.save()
res.status(200).send("register succesfully")

}catch(err){
        console.log(err)
        res.status(500).send("internal error")
    }

});

module.exports =router;
