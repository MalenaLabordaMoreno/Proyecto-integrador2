const productosController = require('../controllers/productosController');
let express = require('express');
let router = express.Router();

// Rutas de productos 
router.get('/detalle/:id', productosController.detalle) // http://localhost:3000/productos/detalle/
router.get('/agregar', productosController.agregar) // http://localhost:3000/productos/agregar

// search result 
const searchController = require('../controllers/searchController'); //porque punto punto barra
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional ?
router.get('/', searchController.index);



module.exports = router;