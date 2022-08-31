const express = require("express");
const drinks = require("./models/drinks")
const app = express();
const port = 3000;

// listen to port and console log to check if its running
app.listen(port, () => {
    console.log("I can hear server running")
});

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

