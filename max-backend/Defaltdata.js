

const Products = require("./models/mencloths");
const productsdata = require("./mensproductdata")

const Defaultdata = async()=>{
    try{
        const storeData =  await Products.insertMany(productsdata)
      

    }catch(err){
    console.log("error"+err.message)


    }
}


module.exports = Defaultdata