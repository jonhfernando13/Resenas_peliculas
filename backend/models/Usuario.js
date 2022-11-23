const mongoose = require("mongoose");
const Schema = mongoose.Schema;



let usuarioSchema = new Schema(
  {
    nombre: {
      type: String,required: true,
    },
    correo: {
      type: String,required: true,
    },
    contrasena: {
      type: String,required: true,
    },
  },
  {
    collection: "Usuarios",
  }
);
module.exports = mongoose.model("Usuario", usuarioSchema);
