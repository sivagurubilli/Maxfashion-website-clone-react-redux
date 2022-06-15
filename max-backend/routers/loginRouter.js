


const jwt = require('jsonwebtoken')
const Reguser = require("../models/usermodel")
const router = require("express").Router();


router.post("/",async(req,res)=>{
    try{
      
   const {email,
    password} = req.body;


    let exist =await Reguser.findOne({email})

if(!exist){
    return res.status(400).send({message:"user not register"})

}
if(password.length<6){
   return  res.status(400).send({
    message: "password must greater then 6 characters"})
}

if(exist.password !== password){
    return res.status(400).send({message:"invalid credintials"})
}
  payload={
      user:{
          id:exist.id
      }
  }
jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
    (err,token)=>{
        if(err)throw err;

        return res.status(200).send({token,message:"succsessfully loggedin",userdata:exist.firstname,isAuth:true})
    })



}catch(err){
        console.log(err)
        res.status(500).send("internal error")
    }

});

module.exports =router;