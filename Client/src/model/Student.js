const mongoose =require('mongoose')

const StudentSchema =new mongoose.Schema({
    username:string,
    email:string,
    password:string
})

const StudentModel =mongoose.model("student",StudentSchema)
model.exports=StudentModel
