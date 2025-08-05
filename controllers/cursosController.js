const db = require('../database/conexion.js');

class CursosController {
  constructor() {
  }

  consultar(req, res) {
    res.json({msg: 'Consulta de cursos exitosa'});
  }

  consultarDetalle(req, res) {
    const {id} = req.params;
    res.json({msg: `Detalle del curso con ID ${id} consultado exitosamente`});
  }

  ingresar(req, res) {
   res.json({msg: 'Curso ingresado exitosamente'});
  }

  actualizar(req, res) {
    res.json({msg: 'Curso actualizado exitosamente'});
  }

  borrar(req, res) {        
    res.json({msg: 'Curso borrado exitosamente'});
  }
}
module.exports = new CursosController;