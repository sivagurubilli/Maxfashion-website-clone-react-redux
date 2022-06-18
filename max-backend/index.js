

const express = require("express")
const  port = process.env.PORT||5000
const mongoose = require("mongoose")

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const router = require("./routers/womenRouter")


mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/maxfashion",
(err)=>{
    if(err)return console.log(err);
    console.log("connected to mongodb")
}

)
const Defaultdata = require("./Defaltdata")
app.use("/mencloths",require("./routers/menRouter"))
app.use("/login",require("./routers/loginRouter"))
app.use("/auth",require("./routers/userRouter"))
app.use("/checkout",require("./routers/addressRouter"))

app.use(router)




app.listen(port,()=>console.log(`server start on port ${port}`))



Defaultdata()