const express =require("express")


const router = new express.Router();
const mencloths = require("../models/mencloths")




 router.get('/mencloths', async (req,res) => {
    try{
    const products = await mencloths.find();
    res.send(products);
    }catch(err){
        console.log(err)
        res.send(err)
    }

});



router.get('/:id', async(req,res) => {
    try{
    const product = await mencloths.findById(req.params.id);

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
