const http = require("http");
const nodemailer=require("nodemailer");
const server = http.createServer((req, res) => {
    if (req.url === "/User" && req.method === "GET") {
        res.end("hello from user");
    } 
    else if(req.url==="/" && req.method==="GET"){
        res.end("hello from server");
    }
    
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});
const mail= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"shreysandhya.pandey124@gmail.com",
        pass:"qnue gjfq qaxa gbph"
    }

})
const mailOptions = {
    from: "shreysandhya.pandey124@gmail.com",
    to: "mr.ripl17@gmail.com",
    subject: "Test Mail",
    text: "Test mail from server"
};
mail.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
