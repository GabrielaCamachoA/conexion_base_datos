const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudianteController.js");

// Obtener todos los estudiante
router.get("/", estudianteController.consultarEstudiante);

// Obtener un estudiante específico por ID
router.get("/:id", estudianteController.consultarDetalle);

// Insertar un nuevo estudiante
router.post("/", estudianteController.ingresar);

// Actualizar un estudiante por ID
router.put("/:id", estudianteController.actualizar);

// Eliminar un estudiante por ID
router.delete("/:id", estudianteController.borrar);

module.exports = router;
