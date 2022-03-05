const Registro = require("../models/registro")

const listRegistros = (req, res)=>{
    Registro.find((err, registros)=>{
        if(err) res.send(err)
        res.send(registros)
    })
}

const saveRegistro = (req, res) => {
    let document = req.body;
    Registro.find({ "fecha": document.date, "nombre": document.name, "estado": document.status, "descrpción": document.description }, (err, registros) => {
        if (err) return res.send(err);
        if (registros.length > 0) {
            res.status(400).send({type:"error",msg:"La cita ya existe!"});
        } else {
            Registro.create(req.body).then((data) => {
                console.log(data)
                return res.status(200).send({type:"ok",msg:"Se creó la cita"});
            }).catch(err => {
                console.log(err);
                return res.status(500).send({type:"error", msg: err});
            })
        }
    })
}

const deleteRegistro = (req,res) => {
    //console.log(req.params)
    Registro.deleteOne({ "_id": req.params.id },(err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deletedCount == 1 ? res.send("Se eliminó la cita") : res.send("No se eliminó la cita")
    })
}


module.exports = {
    listRegistros,
    saveRegistro,
    deleteRegistro
}