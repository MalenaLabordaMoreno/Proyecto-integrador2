const lista_productos = require('../data/data');

let productosController = {
    detalle: function (req,res) {
        let id = req.params.id;
        let producto_buscado

        for (let i = 0; i < lista_productos.length; i++) {
            if (lista_productos[i].id == id) {
                producto_buscado = lista_productos[i];
            }
        }

        return res.render('product', {producto: producto_buscado})
    },
    agregar: function (req,res) {
        return res.render('agregarProductos') //la propiedad va a ser el nombre de la variable que voy a usar en la vista
    },
     //info que voy a usar en la vistac, {propiedad:valor}
    listaProductos: function (req,res) {
        
        return res.render('')
    }
};


module.exports = productosController;