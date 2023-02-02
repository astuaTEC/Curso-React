const express = require('express');
var cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//* Crear el servidor de express
const app = express();

//* Usar cors
app.use(cors());

//! Base de datos
dbConnection();

//! Directotio publico
app.use( express.static('public') );

//* lectura y parseo del body
app.use( express.json() );

//* Rutas
app.use('/api/auth', require('./routes/auth'));

//* Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})