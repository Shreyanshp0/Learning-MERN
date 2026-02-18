const mongoose=require('mongoose')

const ApplicantSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    about:{
        type:String,
        required:true
    },

    PhoneNumber:{
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true })

module.exports= mongoose.model("Applicant",ApplicantSchema)