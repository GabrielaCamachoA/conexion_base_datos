const db = require('../database/conexion.js');

class docentesController {
  constructor() {
  }

  consultar(req, res) {
    res.json({msg: 'Consulta de docentes exitosa'});
  }

  consultarDetalle(req, res) {
    const {id} = req.params;
    res.json({msg: `Detalle del docente con ID ${id} consultado exitosamente`});
  }

  ingresar(req, res) {
   res.json({msg: 'Docente ingresado exitosamente'});
  }

  actualizar(req, res) {
    res.json({msg: 'Docente actualizado exitosamente'});
  }

  borrar(req, res) {        
    res.json({msg: 'Docente borrado exitosamente'});
  }
}
module.exports = new docentesController;