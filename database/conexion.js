const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: process.env.BD_HOST || 'localhost',  
        user: process.env.BD_USER || 'root',
        password: process.env.BD_PWD || '',
        database: process.env.BD_NAME || 'gestion_academica_universidad',
        port: process.env.BD_PORT || 3306,
    }
)

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = db;