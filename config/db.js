const mongoose = require('mongoose');
require('dotenv').config();

// conexion con mongodb
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then (() => console.log("Estamos conectados a mongodb"))
    .catch((err) => console.log(err));

}

module.exports = conectarBD; 