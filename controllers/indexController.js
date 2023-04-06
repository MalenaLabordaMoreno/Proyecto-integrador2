const lista_productos = require('../data/data');

const indexController = {
    index: (req, res) => {
        res.render('index', {lista_productos: lista_productos });
    }
}

module.exports = indexController;