const express = require("express");

const app = express();


app.get("/User", (req, res) => {
    res.send("Hello 👋 Welcome to my Express Server");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
