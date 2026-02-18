const mongoose=require('mongoose')

const JobSchema=new mongoose.Schema({
    companyid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CompanyDetail",
        required:true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    requirements:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["open", "closed"],
        default: "open"
    }
})

module.exports = mongoose.model("Job", JobSchema)