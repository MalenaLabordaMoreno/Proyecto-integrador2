const searchController = require('../controllers/searchController');
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional ?
router.get('/', searchController.index)

module.exports = router;