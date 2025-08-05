const mysql = require('mysql2');

const db= mysql.createConnection(
    {
        host: '127.0.0.1',  
        user: 'root',
        password: '',
        database:'gestion_academica_universidad'
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