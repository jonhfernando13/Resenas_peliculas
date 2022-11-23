const express= require("express");
const controlUsuario = require("../Control/controlUsuario");

class Usuario {
    constructor() {
        this.ruta= express.Router();
        this.config();
    }
    config(){
        this.ruta.get('/Usuarios', controlUsuario.get)
        this.ruta.post('/Usuarioscrear', controlUsuario.crear)
        this.ruta.delete('/Usuariosborrar', controlUsuario.delete)

    }
}
exports.default = Usuario;