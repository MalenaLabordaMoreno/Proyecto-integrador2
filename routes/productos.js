const productosController = require('../controllers/productosController');
let express = require('express');
let router = express.Router();

// Rutas de productos 
router.get('/', productosController.index) // http://localhost:3000/productos/
router.get('/agregar', productosController.agregar) // http://localhost:3000/productos/agregar

module.exports = router;