const mongoose=require('mongoose')

const ApplicantSchema=new mongoose.Schema({
    Name:{
        type: String,
        require: true,
        unique: true
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    Password:{
        type: String,
        require: true
    },
    PhoneNumber:{
        type: Number,
        require: true,
        unique: true
    },
    Skills:{
        type: Array,
        require: true
    },
    Resume:{
        type: Document,
        require: true
    }
})

module.exports= mongoose.model("Applicant",ApplicantSchema)