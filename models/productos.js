const mongoose = require('mongoose');
const productoSchema = mongoose.Schema({
    referencia: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },   
    proveedor: {
        type: String,
        required: true
    },
    
    categoria: {
        type: String,
        required: true
    },
    medida: {
        type: String,
        required: true
    },
    

},{versionkey:false});

module.exports = mongoose.model('producto',productoSchema);