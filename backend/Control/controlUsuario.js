const Database = require("../models/Usuario");


const controlUsuario = {
  crear: async(req, res) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    const {nombre,correo,contrasena}  = req.body;
    
    console.log(req.body);
    var database = new Database();
    database.nombre = nombre;
    database.correo = correo;
    database.contrasena = contrasena;

    database.save((err, databaseuser) => {
      if (err || !databaseuser) {
        return res.status(400).send({
          status: "error",
          message: "No se puede crear el usuario",
        });
      }

      return res.status(200).send({
        status: "sucesss",
        databaseuser,
      });
    });
  },
  get: async (req, res) => {
    const databaseuser = await Database.find();
    res.json(databaseuser);
  },

  delete: async (req, res) => {
    res.json(req.params.databaseuser);
    const borrar = Database.findByIdAndRemove({_id: req.body.id})
    console.log(req.body.correo);
 
    
    if (borrar.deletedCount) {
      res.json({"eliminado":""});
    }
  }

}

module.exports = controlUsuario;
