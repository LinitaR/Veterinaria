const express = require("express");
const registros = express.Router();
const {listRegistros, saveRegistro, deleteRegistro} = require("../controllers/Registros");
const {verificarToken} = require("../middelware/verificarToken")

registros.get('/', verificarToken, listRegistros) 
registros.post('/', saveRegistro);
registros.delete('/:id', verificarToken, deleteRegistro);

module.exports = {
    registros
}