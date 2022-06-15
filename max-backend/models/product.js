const mongoose = require("mongoose");


const womenscloths = new mongoose.Schema({
  img:{type:String,required:true},
  name:{type:String,required:true},
  price:{type:Number,required:true},
 color:{type:String,required:true},
   size:{type:String,required:true}
 },
 
 );


 module.exports = mongoose.model("womenscloths",womenscloths)