"use strict"
const express = require("express");
let router = express.Router();
const home = require('../controllers/home')


router.post("/", home.home)

module.exports = router