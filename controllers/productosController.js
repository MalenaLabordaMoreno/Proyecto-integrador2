const db = require('../database/models');
const Productos = db.Producto
let op = db.Sequelize.Op;

let productosController = {
    detalle: function (req,res) {
        Productos.findByPk(req.params.id, {
            include: [
                {association: "comments"},
                {association: "user", include: "comments"}
            ]
        }) //falta el include para mostrar los comentarios y los usuarios
            .then((resultado) => {
                //return res.send(resultado)
                return res.render('product', {producto: resultado})
            })
            .catch(error => console.log(error));
        },

    agregar: function (req,res) {
        if (!req.session.user) {
            return res.redirect('/users/login')
        } else {
            return res.render('agregarProductos') //la propiedad va a ser el nombre de la variable que voy a usar en la vista
        }
    },

    store: function (req,res) {
        let form = req.body;

        let producto = {
            usuario_id: req.session.user.id,
            nombre_producto: form.nombre,
            descripcion: form.descripcion,
            imagen: form.imagen,
        }

        Productos.create(producto)
            .then(function (resultado) {
                return res.redirect('/productos/detalle/' + resultado.id)
            })
            .catch(function (error) {
                res.send(error)
            })

    },

    search: function (req,res) { 
        let busqueda = req.query.search
         
        Productos.findAll({
            include: [
                {association: 'user'},
                {association: 'comments', include: 'user'}
            ],
            order: [
                ['updatedAt', 'DESC']
            ],
            where: [
                {nombre_producto: {[op.like]: '%' + busqueda + '%'}}
            ]
        })
        .then(function(productos){
            return res.render('search-results', {lista_productos: productos})
        })
        .catch(function (error) {
            res.send(error)
        })
    }
}

module.exports = productosController;

