const express= require('express')
const mongoose= require('mongoose')
const User=require('./StudentSchema.js')
const CompanyDetail=require('./CompanyDetails.js')
const app=express()

app.use(express.json()) // whatever we are trying to fetch or send data to the server, it will be in json format
mongoose.connect('mongodb+srv://PC-Compass:Compass%40pass@online-jobportal.lpqp1fj.mongodb.net/').then(()=>{console.log("DB Connected")})
app.get("/about",(req,res)=>{
    res.send("hello")
})

app.post("/api/user",async (req, res)=>{
    try{
    // const user= await user.find()
    const user= await User.create(req.body) // collection of data base
     res.status(201).json({
            success: true,
            data: user
        });
    }
    catch(e){
        console.log(e)
    }
})
app.get("/api/user", async (req,res)=>{
    try{
    const users=await User.find();
    res.status(200).json(users)
    }
    catch(e){
        console.log(e)
    }
})
app.put("/api/user/:id", async (req, res)=>{
    try{
        const updateduser= await User.findByIdAndUpdate(req.params.id , req.body,{new: true}) //we are using params beacuse we are configuring the id in the api link
        res.status(200).json(updateduser)
    
    }
    catch(e){
        console.log(e)
        res.status(500).json({message: "Error updating user", error: e.message})
    }
})
app.delete("/api/user/:id", async(req, res)=>{
    try{
        const deleteuser= await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteuser)
    }
    catch(e){
        console.log(e)
    }
})
app.post("/api/companydetails", async (req,res)=>{
    try{
        const companydetails= await CompanyDetail.create(req.body)
        res.status(201).json({
            success:true,
            data: companydetails
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({message: "Error creating company details", error: e.message})
    }
})
app.get("/api/companydetails", async (req,res)=>{
    try{
        const companydetails= await CompanyDetail.find();
        res.status(200).json(companydetails)
    }
    catch(e){
        console.log(e)
    }
})
app.put("/api/companydetails/:id", async (req,res)=>{
    try{
        const updatecompanydetails= await CompanyDetail.findByIdAndUpdate(req.params.id,req.body, {new: true})
        res.status(200).json(updatecompanydetails)
    }
    catch(e){
        console.log(e)
    }
})
app.listen(3000,()=>{
    console.log("Server connected")
})