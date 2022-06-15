const express =require("express")


const router = new express.Router();
const womenscloths = require("../models/product")




 router.get('/womencloths', async (req,res) => {
    try{
    const products = await womenscloths.find();
    res.send(products);
    }catch(err){
        console.log(err)
        res.send(err)
    }

});



router.get('/:id', async(req,res) => {
    try{
    const product = await womenscloths.findById(req.params.id);

    if(product){
        res.send(product);
    }
    else{
        res.status(404).send("Product not found.");

    }
}catch(err){
    console.log(err)
    res.send(err)
}
})


module.exports = router;
