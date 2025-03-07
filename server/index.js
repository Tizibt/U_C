const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const USCModel=require('./models/USC')


const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb:/127.0.0")
app.post('/register',(req,res)=>{
    USCModel.crate(req.body)
    .then(USC=>res.json(USC))
    .catch(err=>res.json(err))

})
app.listen(300,()=>{
    console.log("server is running")
})