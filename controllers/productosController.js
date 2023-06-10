const db = require('../database/models');
let op = db.Sequelize.Op;
const Productos = db.Producto

let productosController = {
    detalle: function (req,res) {
        Productos.findByPk(req.params.id) //falta el include para mostrar los comentarios y los usuarios
            .then((resultado) => {
                return res.render('product', {producto: resultado})
            })
            .catch(error => console.log(error));
        },

    agregar: function (req,res) {
        return res.render('agregarProductos', {lista_productos: Productos}) //la propiedad va a ser el nombre de la variable que voy a usar en la vista
    },

    search: function (req,res) { 
        // let busqueda = req.query.search
         
        // Productos.findAll({
            
        // })
//        return res.render('search-results', {lista_productos: db})
    }
}

module.exports = productosController;
