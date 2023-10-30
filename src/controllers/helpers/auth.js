// manipular token de autenticação
const jwt = require('jsonwebtoken')
const {promisify} = require('util')
require('dotenv').config()

module.exports= {
   eAdmin: async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader){
        res.status(400).json({
            error:true,
            message:"Necessario realizar o login para acessar a pagina "
        })
    }

    const [bearer, token] = authHeader.split(' ')
    if (!token){
        res.status(400).json({
            error:true,
            message:"Necessario enviar o token"
        })
    }

    try{
       const decode = await promisify(jwt.verify)(token, process.env.SECRET)
       req.userId = decode.id
    }catch{
        res.status(400).json({
            error:true,
            message:"Necessario enviar o token"
        })
    }

    return next()
   }
}