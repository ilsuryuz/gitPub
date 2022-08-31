const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// listen to port and console log to check if its running
app.listen(port, () => {
    console.log("I can hear server running")
})

