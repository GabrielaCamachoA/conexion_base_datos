const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 6500;
const estudianteRouter = require('./routes/estudianteRoutes.js');
const profesoresRouter = require('./routes/docentesRouter.js');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Gestión Escolar');
});

app.use('/estudiantes', estudianteRouter);
app.use('/docentes', profesoresRouter);

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});