const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'rick_morty_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
        process.exit(1);
    }
    console.log('Conexión exitosa a la base de datos');

    // creacion de la tabla tabla
    const createTableQuery =
        `CREATE TABLE IF NOT EXISTS favorites (
            id INT PRIMARY KEY,
            img VARCHAR(255),
            name VARCHAR(100),
            species VARCHAR(50),
            status VARCHAR(50),
            gender VARCHAR(50),
            origin VARCHAR(100),
            last_location VARCHAR(100)
        );`;

    db.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error al crear la tabla:', err);
            return;
        }
        console.log('Tabla "favorites" verificada o creada exitosamente');
    });
});

module.exports = db;
