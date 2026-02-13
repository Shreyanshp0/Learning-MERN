const mongoose = require('mongoose');

const CompanyDetail = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    postedJobs: [{
        type: String,
        ref: "Job"
    }]
}, { timestamps: true }); 

module.exports = mongoose.model("CompanyDetail", CompanyDetail);
