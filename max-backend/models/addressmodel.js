
const mongoose = require("mongoose");


const useraddress = new mongoose.Schema({
name:{type:String,required:true},
mobileno:{type:Number,required:true},
pincode:{type:Number,required:true},
city:{type:String,required:true},
state:{type:String},
building:{type:String},
street:{type:String},
cardno:{type:Number},
cardname:{type:String},
cvv:{type:Number,required:true}
});


 module.exports = mongoose.model("useraddress",useraddress)