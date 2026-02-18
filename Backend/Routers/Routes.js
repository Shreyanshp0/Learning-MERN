const routes = require("express").Router();
const { addJob, addCompanydetails, toggleJobStatus, getJobStatus, getJob, deleteJob, getCompanyPostedjob, login,addApplicant, addUser } = require("../Controller/Controller");

routes.post("/addjob", addJob)
routes.post("/addcompanydetails", addCompanydetails)
routes.post("/addApplicant",addApplicant)
routes.post("/User",addUser)
routes.patch("/jobs/:id/status", toggleJobStatus)
routes.get("/jobs/:id/status", getJobStatus)
routes.get("/jobs",getJob)
routes.get("/deleteJob", deleteJob)
routes.get("/getCompanyJobDetails/:id", getCompanyPostedjob)
routes.post("/login", login)
module.exports = routes;