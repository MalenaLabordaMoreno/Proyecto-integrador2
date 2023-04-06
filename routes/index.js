var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //PREGUNTAR NICO QUE ES ESTO Y SI PODEMOS SACAR LO DE EXPRESS DEL INDEX EN LA VISTA DESDE LOCAL HOST
});

module.exports = router;
