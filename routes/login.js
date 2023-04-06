const loginController = require('../controllers/loginController');
let express = require('express');
let router = express.Router();

//Rutas de productos
router.get('/',loginController.index)


module.exports = router;