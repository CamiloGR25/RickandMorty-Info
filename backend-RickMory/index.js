const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// ruta para manejar la insercion 
app.post('/favorites', (req, res) => {
    // extraer y transformar los datos del cuerpo de la solicitud
    const {
        id,
        name,
        status,
        species,
        gender,
        image,
        origin,
        location
    } = req.body;

    // Extraer los nombres de origin y location
    const originName = origin.name;
    const lastLocationName = location.name;

    // Validación para asegurarse de que todos los campos necesarios están presentes
    if (!id || !image || !name || !species || !status || !gender || !originName || !lastLocationName) {
        console.error('Faltan campos en req.body');
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const query = `
        INSERT INTO favorites (
            id, img, name, species, status, gender, origin, last_location
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
        img = VALUES(img),
        name = VALUES(name),
        species = VALUES(species),
        status = VALUES(status),
        gender = VALUES(gender),
        origin = VALUES(origin),
        last_location = VALUES(last_location);
    `;

    // Ejecutar la consulta con los datos transformados
    db.query(query, [id, image, name, species, status, gender, originName, lastLocationName], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos:', err);
            return res.status(500).send('Error al guardar en la base de datos');
        }
        res.status(200).send('Personaje guardado exitosamente');
    });
});


// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
