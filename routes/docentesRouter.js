const express = require("express");
const router = express.Router();
const docentesController = require("../controllers/docentesController.js");

// Obtener todos los docentes
router.get("/", docentesController.consultar);

// Obtener detalle de un docente por ID
router.get("/:id", docentesController.consultarDetalle);

// Insertar un nuevo docente
router.post("/", docentesController.ingresar);

// Actualizar un docente por ID
router.put("/:id", docentesController.actualizar);

// Eliminar un docente por ID
router.delete("/:id", docentesController.borrar);

module.exports = router;
