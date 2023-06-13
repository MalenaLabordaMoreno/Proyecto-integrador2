const productosController = require('../controllers/productosController');
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional progra 1
router.get('/agregar', productosController.agregar) // http://localhost:3000/productos/agregar

router.post('/agregar', productosController.store) // http://localhost:3000/productos/agregar

// Rutas de productos 
router.get('/:id', productosController.search);
router.get('/detalle/:id', productosController.detalle) // http://localhost:3000/productos/detalle/
router.get('/editar/:id', productosController.updateGet) // http://localhost:3000/productos/detalle/

router.post('/detalle/:id', productosController.comentario) // http://localhost:3000/productos/detalle/
router.post('/editar/:id', productosController.updatePost) // http://localhost:3000/productos/detalle/

router.post('/delete/:id', productosController.deletePost)
module.exports = router;