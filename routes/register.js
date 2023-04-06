const registerController = require('../controllers/registerController');
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional ?
router.get('/', registerController.index)

module.exports = router;