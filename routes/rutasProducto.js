const express = require('express');

const router = express.Router();
const productoController = require('../controllers/productoController');
///rutas del Crud de producto

router.post('/',productoController.agregarProducto);
router.get('/',productoController.buscarProducto);
router.get('/:id',productoController.mostrarProductos);
router.patch('/:id',productoController.modificarProductos); //metodo patch
router.put('/:id',productoController.actualizarProducto); //metodo put
router.delete('/:id',productoController.eliminarProducto);

module.exports = router;

