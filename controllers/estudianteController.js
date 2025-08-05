const db = require('../database/conexion.js');

class EstudianteController {
  constructor() {
  }

  consultar(req, res) {
    try {
      const {
      id,
      nombre,
      apellido,
      correo_estudiantil,
      id_genero,
      numero_identificacion,
      id_identificacion,
      id_carrera,
      fecha_nacimiento,
      fecha_ingreso,
      estado_academico
    } = req.body;

    const sql = `
      SELECT * FROM gestion_academica_universidad.estudiante
    `;

    db.query(sql, [
      id,
      nombre,
      apellido,
      correo_estudiantil,
      id_genero,
      numero_identificacion,
      id_identificacion,
      id_carrera,
      fecha_nacimiento,
      fecha_ingreso,
      estado_academico
    ], (error, results) => {
      if (error) {
        return res.status(400).json({ error: error.message });
      }
    });
    } catch (error) {
       res.status(500).send(error);
    }
  }

consultarDetalle(req, res) {
  try {
    const { id } = req.params;

    const sql = `
      SELECT * 
      FROM gestion_academica_universidad.estudiante 
      WHERE id = ?
    `;

    db.query(sql, [id], (error, results) => {
      if (error) {
        return res.status(400).json({ error: error.message });
      }

      if (results.length === 0) {
        return res.status(404).json({ msg: "Estudiante no encontrado" });
      }

      res.json(results[0]); // devolvemos solo un estudiante
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}


  ingresar(req, res) {
  try {
    const {
      id,
      nombre,
      apellido,
      correo_estudiantil,
      id_genero,
      numero_identificacion,
      id_identificacion,
      id_carrera,
      fecha_nacimiento,
      fecha_ingreso,
      estado_academico
    } = req.body;

    const sql = `
      INSERT INTO gestion_academica_universidad.estudiante
      (id, nombre, apellido, correo_estudiantil, id_genero, numero_identificacion, 
       id_identificacion, id_carrera, fecha_nacimiento, fecha_ingreso, estado_academico)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      id,
      nombre,
      apellido,
      correo_estudiantil,
      id_genero,
      numero_identificacion,
      id_identificacion,
      id_carrera,
      fecha_nacimiento,
      fecha_ingreso,
      estado_academico
    ], (error, results) => {
      if (error) {
        return res.status(400).json({ error: error.message });
      }
      res.json({ msg: "✅ Estudiante ingresado exitosamente", results });
    });

  } catch (error) {
    res.status(500).send(error);
  }
}


actualizar(req, res) {
  try {
    const {
      id,
      nombre,
      apellido,
      correo_estudiantil,
      id_genero,
      numero_identificacion,
      id_identificacion,
      id_carrera,
      fecha_nacimiento,
      fecha_ingreso,
      estado_academico
    } = req.body;

    const sql = `
      UPDATE gestion_academica_universidad.estudiante
      SET nombre = ?, apellido = ?, correo_estudiantil = ?, 
          id_genero = ?, numero_identificacion = ?, id_identificacion = ?, 
          id_carrera = ?, fecha_nacimiento = ?, fecha_ingreso = ?, 
          estado_academico = ?
      WHERE id = ?
    `;

    db.query(sql, [
      nombre,
      apellido,
      correo_estudiantil,
      id_genero,
      numero_identificacion,
      id_identificacion,
      id_carrera,
      fecha_nacimiento,
      fecha_ingreso,
      estado_academico,
      id // siempre al final, porque es para el WHERE
    ], (error, results) => {
      if (error) {
        return res.status(400).json({ error: error.message });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ msg: "❌ Estudiante no encontrado" });
      }

      res.json({ msg: "✅ Estudiante actualizado exitosamente" });
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
}


  borrar(req, res) {        
    try {
    const { id } = req.params;

    const sql = `
      DELETE FROM gestion_academica_universidad.estudiante 
      WHERE id = ?
    `;

    db.query(sql, [id], (error, results) => {
      if (error) {
        return res.status(400).json({ error: error.message });
      }

      if (results.length === 0) {
        return res.status(404).json({ msg: "Estudiante no encontrado" });
      }
      res.json({ msg: "✅ Estudiante eliminado exitosamente" });
      res.json(results[0]); // devolvemos solo un estudiante
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
  }
}
module.exports = new EstudianteController;