const {Schema, model} = require ("mongoose");
const jwt = require("jsonwebtoken");

const doctorSchema = new Schema({
    usuario:{
        type: String
    },
    password:{
        type: String
    },
    nombre:{
        type: String
    }
});

doctorSchema.methods.generarJWT = ()=>{
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        usuario: this.usuario
    },"veterinaria" )
}

module.exports = model("Doctor",doctorSchema,"doctores")