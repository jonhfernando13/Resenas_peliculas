const express = require("express");

class Inicio {
  constructor() {
    this.ruta = express.Router();
    this.config();
  }

  config() {
    this.ruta.get("/", (req, res) => {
      res.status(200).json({ Bien: "Conecto" });
    });
  }
}

exports.default = Inicio;
