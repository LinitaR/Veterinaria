const doctores = require("../Models/Doctor")

const login = (req, res) => {
    req.body.usuario && req.body.password ?
        doctores.findOne({usuario:req.body.usuario }, (err, user) => {
            console.log(user)
            switch (true) {
                case (err):
                    res.send({ "msg": err })
                    break;
                case (user==null):
                    res.send({ "msg": "No se encontró el usuario" })
                    break;
                case (user?.password == req.body.password):
                    let token = user.generarJWT()
                    res.send({"msg": "Se puede loguear", token})
                    break;
                case (user?.password != req.body.password):
                    res.send({"msg": "Contraseña incorrecta"})
                    break;
            }
        })
        :
        res.send({ "msg": "le falta un dato (usuario o contraseña)" });
}

module.exports = {
    login
}