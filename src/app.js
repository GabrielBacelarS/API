const express  = require('express')
const Router = require('./router')
//Verifica a conexão com o banco de dados
const database = require('./db/models/')

class app {
    constructor(){
        this.server = express()
        this.middleware()
        this.routes()
    }
    middleware(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(Router)
    }
}

module.exports=  new app().server