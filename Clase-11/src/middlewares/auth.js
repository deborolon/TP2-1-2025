import jwt from "jsonwebtoken"

const SECRETKEY = "clave_secreta"
//Generación del token con una firma
const generateToken = async (data) => {
    //payload -> cualquier proceso que contenga información delicada
    //Bcrypt
    const payload = {
        email: data.email,
        password: data.password
    }
    //objeto con info del usuario + mi clave de app + si expira, en cuanto tiempo
    const tkn = await jwt.sign(payload, SECRETKEY, { expiresIn: '5m'})
    return tkn
}

//Verificación del token y de la duración
//un middleware se situa entre la solicitud y la respuesta
//next es la palabra reservada para que continue el flujo
const verifyToken = async (req, res, next) => {
    //generalmente los tokens se envian en los encabezados de cada solicitud
    const tkn = req.headers.authorization
    const decoded = await jwt.verify(tkn, SECRETKEY)
    if(!decoded) res.status(401).json({message: "Token inválido."})

    next()
}

export default {
    generateToken,
    verifyToken
}