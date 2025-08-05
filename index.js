const express = require('express');
const cors = require('cors');
const app = express();
const estudianteRouter = require('./routes/estudianteRoutes.js');
const profesoresRouter = require('./routes/docentesRouter.js');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Gestión Escolar');
});
app.use('/estudiante', estudianteRouter);
app.use('/docentes', profesoresRouter);

app.listen(6500, () => {
    console.log('Servidor activo');
});