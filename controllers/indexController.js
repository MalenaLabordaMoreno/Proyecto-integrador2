const db = require('../database/models');
const Productos = db.Producto

const indexController = {
    index: (req, res) => {
        Productos.findAll({
            include: [
                {association: 'user'},
                {association: 'comments', include: 'user'}
            ]
        })
        .then(productos => {
            // res.send(productos);
            res.render('index', {lista_productos: productos});
        })
        .catch(error => console.log(error));
    }
}

module.exports = indexController;