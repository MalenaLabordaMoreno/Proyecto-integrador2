const db = require('../database/models');

let productosController = {
    detalle: function (req,res) {
        let id = req.params.id;
        let producto_buscado

        for (let i = 0; i < db.length; i++) {
            if (db[i].id == id) {
                producto_buscado = db[i];
            }
        }

        return res.render('product', {producto: producto_buscado})
    },
    agregar: function (req,res) {
        return res.render('agregarProductos', {lista_productos: db}) //la propiedad va a ser el nombre de la variable que voy a usar en la vista
    },

    search: function (req,res) { 
        return res.render('search-results', {lista_productos: db})
    },
};

module.exports = productosController;
