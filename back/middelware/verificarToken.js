const jwt = require("jsonwebtoken")

const verificarToken = (req, res, next) => {
    let token = req.header('Authorization')
    if (!token) res.send({ "msg": "Acceso denegado" })
    token = token.split(' ')[1]
    if (!token) res.send({ "msg": "Acceso denegado" })
    try {
        let tokenPayload = jwt.verify(token, "veterinaria")
        req.user = tokenPayload
        next()
    } catch (err) {
        res.send({ "msg": "Sesión incorrecta" })
    }
}

module.exports = {
    verificarToken
}