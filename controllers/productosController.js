const db = require('../database/models');
let op = db.Sequelize.Op;

let productosController = {
    detalle: function (req,res) {
        let id = req.params.id;
        let producto_buscado

        for (let i = 0; i < db.Producto.length; i++) {
            if (db.Producto[i].id == id) {
                producto_buscado = db.Producto[i];
            }
        }

        return res.render('product', {producto: producto_buscado})
    },
    agregar: function (req,res) {
        return res.render('agregarProductos', {lista_productos: db.Producto}) //la propiedad va a ser el nombre de la variable que voy a usar en la vista
    },

    search: function (req,res) { 
        let busqueda = req.query.search
         
        db.Producto.findAll({
            
        })
//        return res.render('search-results', {lista_productos: db})
    },
};

module.exports = productosController;
