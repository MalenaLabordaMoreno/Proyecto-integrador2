const productosController = require('../controllers/productosController');
let express = require('express');
let router = express.Router();

// Rutas de productos 
router.get('/detalle/:id', productosController.detalle) // http://localhost:3000/productos/detalle/
router.get('/agregar', productosController.agregar) // http://localhost:3000/productos/agregar

module.exports = router;