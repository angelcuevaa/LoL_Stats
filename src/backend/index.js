"use strict";

const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.port || 4444;
const home = require("./src/routes/home");
require('dotenv').config()
app.use(cors())

app.use("/home", home)

app.get("/", (req,res) =>{
    res.send("Hello World")
})

app.listen(port, err => {
    if (err){
        return console.log("Error:", err)
    }
    console.log('Listening on port' + port)
})
