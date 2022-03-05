const express = require("express");
const doctores = express.Router();
const {login} = require("../controllers/Doctores");

doctores.post('/login', login)

module.exports = {
    doctores
}