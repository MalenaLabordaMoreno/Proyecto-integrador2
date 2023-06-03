var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/editProfile', usuariosController.edit);
router.get('/login',usuariosController.login)
router.get('/register', usuariosController.register)
router.get('/profile', usuariosController.profile) // le agregamos id?

router.post('/register', usuariosController.store); //Guarda al usuario en la base de datos.

module.exports = router;

