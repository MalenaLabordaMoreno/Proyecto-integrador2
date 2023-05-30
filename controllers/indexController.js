const db = require('../database/models');

const indexController = {
    index: (req, res) => {
        res.render('index', {lista_productos: db});
    }
}

module.exports = indexController;