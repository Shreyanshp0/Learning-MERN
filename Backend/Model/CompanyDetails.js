const mongoose = require('mongoose');

const CompanyDetail = new mongoose.Schema({
    Companyid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true }); 

module.exports = mongoose.model("CompanyDetail", CompanyDetail);
