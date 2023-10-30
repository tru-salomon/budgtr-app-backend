const express = require("express");
const transactions = require("");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is the Budget app backend")
});

module.exports = app;
