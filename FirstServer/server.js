const { response } = require("express");
const http=require("http")
const creatser=http.createServer((req,res)=>{
    console.log("Server is Running");
    res.end("Hello from the server side");
})

