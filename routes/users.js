var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//perfil 
const profileController = require('../controllers/profileController');
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional ?
router.get('/:id', profileController.index); //va punto y coma?
router.get('/editProfile', profileController.edit);

// login 
const loginController = require('../controllers/loginController');
let express = require('express');
let router = express.Router();

//Rutas de productos
router.get('/',loginController.index)


// register 
const registerController = require('../controllers/registerController');
let express = require('express');
let router = express.Router();

// Rutas de busqueda - completar con campo opcional ?
router.get('/', registerController.index)


module.exports = router;

module.exports = router;
