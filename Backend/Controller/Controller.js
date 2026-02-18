const jwt = require("jsonwebtoken");
const Job = require("../Model/JobSchema");
const CompanyDetail = require("../Model/CompanyDetails");
const User = require("../Model/User");
const ApplicantSchema = require("../Model/ApplicantSchema");

const addJob = async (req, res) => {
    try {
        const { companyid, title, description, requirements } = req.body;
        const company = await CompanyDetail.findById(companyid);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        const newJob = new Job({
            companyid,
            title,
            description,
            requirements
        });
        const savedJob = await newJob.save();
        res.status(201).json({ message: "Job posted successfully", job: savedJob });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addUser= async(req,res)=>{
    try {
        const{name,email, password,role}=req.body
        const newUser= new User({
            name,email, password,role
        })
        const savedUser= await newUser.save()
        res.status(201).json({ message: "User added successfully", company: savedUser})
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const addCompanydetails = async (req, res) => {
    try {
        const { Companyid, description } = req.body;
        const newCompany = new CompanyDetail({
            Companyid,
            description
        });
        const savedCompany = await newCompany.save();
        res.status(201).json({ message: "Company added successfully", company: savedCompany });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addApplicant=async(req,res)=>{
    try{
        const{Applicantid, about, PhoneNumber}=req.body
        const newApplicant=new ApplicantSchema({
            Applicantid, about, PhoneNumber
        })
        const savedApplicant= await newApplicant.save()
        res.status(201).json({ message: "Applicant added successfully", applicant:savedApplicant });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

const toggleJobStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        job.status = job.status === "open" ? "closed" : "open";
        await job.save();

        res.status(200).json({
            message: "Job status updated successfully",
            jobId: job._id,
            status: job.status
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getJob= async(req,res)=>{
    try {
        const job=await Job.find();
        if(!job){
            return res.status(404).json({message:"Job not Found"})
        } 
        res.status(200).json(job)
    } catch (error) {
        
    }
}
const getJobStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ status: job.status });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        await Job.findByIdAndDelete(id);

        res.json({ message: "Job deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCompanyPostedjob= async( req, res)=>{
    try {    
        const {id}=req.params; // this takes the company id from the request parameters
        const company= await CompanyDetail.findById(id).populate("Companyid")
        if(!company){
            return res.status(404).json({message:"Company not available"})
        }
        const jobs= await Job.find({companyid:id}) 
        res.status(200).json({
            company: company.Companyid ? company.Companyid.name : "Unknown Company",
            totalJobs: jobs.length,
            jobs
        })
    } catch (error) {
         res.status(500).json({ message: error.message });
    }


}

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        if (user.role !== role) {
            return res.status(403).json({ message: "Role mismatch" });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, "Shreyansh", { expiresIn: "1h" });
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addJob, addCompanydetails, toggleJobStatus, getJobStatus, getJob, deleteJob, getCompanyPostedjob, login ,addApplicant, addUser};
