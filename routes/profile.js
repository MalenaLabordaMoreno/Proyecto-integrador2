const profileController = require('../controllers/profileController');
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional ?
router.get('/:id', profileController.index); //va punto y coma?
router.get('/editProfile', profileController.edit);

module.exports = router;