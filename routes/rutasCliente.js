const express = require('express');

const router = express.Router();
const clienteController = require('../controllers/clienteController');


router.post('/',clienteController.agregarClientes);
router.get('/',clienteController.buscarClientes);
router.get('/:id',clienteController.mostrarClientes);
///router.patch('/:id',clienteController.modificarClientes); //metodo patch
router.put('/:id',clienteController.actualizarClientes); //metodo put
router.delete('/:id',clienteController.eliminarClientes);


module.exports = router;

