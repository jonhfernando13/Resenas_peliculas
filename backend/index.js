const express = require('express')
const cors= require("cors")
const rInicio = require("./Routers/index")
const rcrearUsurio = require("./Routers/rUsuario")
const {config}= require("./Server/serverConfig")
const database = require("./models/Usuario")



class Web{
    constructor() {
        this.app=express()
        this.app.set("port",config.port)
        this.app.use(express.json())
        this.app.use(express.urlencoded())
        this.app.use(cors())

        this.app.use(new rInicio.default().ruta)
        this.app.use(new rcrearUsurio.default().ruta)


        this.app.listen(config.port,()=> {
            console.log("Esta vivo")
        })
    }
    async basedateinit() {
        await database
    }
}

const run = new Web()