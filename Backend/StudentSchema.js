const mongoose= require('mongoose')
const { applyTimestamps } = require('./CompanyDetails')
const studschem=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("User",studschem)
