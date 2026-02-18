const express= require('express')
const mongoose= require('mongoose')
const CompanyDetail=require('./Model/CompanyDetails.js')
const Job=require('./Model/JobSchema.js')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const jwt = require("jsonwebtoken");
const route=require("./Routers/Routes.js")
app.use(express.json()) // whatever we are trying to fetch or send data to the server, it will be in json format
mongoose.connect(process.env.MongoDB_URI).then(()=>{console.log("DB Connected")})
app.get("/about",(req,res)=>{
    res.send("hello")
})

const verifyToken=(req,res,next)=>{
    const authHeader = req.headers.authorization 
    if(!authHeader){
        return res.status(401).json({message:"Unauthorized"})
    }
    const token=authHeader.split(" ")[1]  //the first field is bearer and the second field is the token that's why we are using index 1 because we want the token to be stored 
    try {
        const payload=jwt.verify(token,"Shreyansh") 
        req.user=payload
        next()
    } catch (error) {
        return res.status(403).json({message: "Invalid Token"})
    }
}
app.use("/api", route)
app.listen(3000,()=>{
    console.log("Server connected")
})