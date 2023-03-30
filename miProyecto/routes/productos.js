const productosController = require ('../controllers/productosController');
let express = requiere('express');
let router = express.Router();

// Rutas de productos 
router.get('/agregar', productosController.agregar) // http://localhost:3000/productos/agregar

module.exports = router;