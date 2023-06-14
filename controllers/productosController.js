const db = require('../database/models');
const Productos = db.Producto
const Comentarios = db.Comentario
let op = db.Sequelize.Op;

let productosController = {
    detalle: function (req,res) {
        Productos.findByPk(req.params.id, {
            include: [
                {association: "comments", include: "user"},
                {association: "user", include: "comments"}
            ]
            // ,
            // order: [
            //     ['createdAt', 'DESC']
            // ]
        }) 
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

    updateGet: function (req,res) {
        if (req.session.user != undefined) {

            let idPost = req.params.id;

            Productos.findByPk(idPost, {
                include: [
                    {association: 'user'},
                ]
            })
                .then(function(resultado) {
                    if (resultado != undefined) {
                        if (resultado.user.id != req.session.user.id) {
                            return res.send("No tenes permiso para editar este post")
                        } else {
                            return res.render('product-edit', { producto: resultado })
                        }
                    } else {
                        return res.send("No existe el post")
                    }
                })
                .catch(function(error) {
                    return res.send(error)
                })
        }
        else {
            return res.redirect('/users/login')
        }
    },
    
    updatePost: function (req,res) {
        let idPost = req.params.id;

        if (req.session.user != undefined) {
            Productos.findByPk(idPost, {
                include: [
                    {association: 'user'},
                ]
            })
                .then(function(resultado) {
                    if (resultado != undefined) {
                        if (resultado.user.id != req.session.user.id) {
                            return res.send("No tenes permiso para editar este post")
                        } else {
                            let form = req.body;

                            let productoActualizado = {
                                usuario_id: req.session.user.id,
                                nombre_producto: form.nombre,
                                descripcion: form.descripcion,
                                imagen: form.imagen,
                            }

                            if (form.nombre === "") {
                                productoActualizado.nombre_producto = resultado.nombre_producto
                            }

                            if (form.descripcion === "") {
                                productoActualizado.descripcion = resultado.descripcion
                            }

                            if (form.imagen === "") {
                                productoActualizado.imagen = resultado.imagen
                            }

                            Productos.update(productoActualizado, {
                                where: {
                                    id: idPost
                                },
                            })
                                .then(function (result) {
                                    return res.redirect('/productos/detalle/' + resultado.id)
                                })
                                .catch(function (error) {
                                    res.send(error)
                                })
                        }
                    } else {
                        return res.send("No existe el post")
                    }
                })
                .catch(function(error) {
                    return res.send(error)
                })
        }

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
    },

    comentario: function (req, res) {

        if (req.session.user != undefined) {
            let idPost = req.params.id;
            let idUsuario = req.session.user.id;
            let comentario = req.body.comentario

            let comentarioNuevo = {
                usuario_id: idUsuario,
                productos_id: idPost,
                comentario: comentario
            }

            Comentarios.create(comentarioNuevo)
                .then(function(resultado) {
                    return res.redirect('/productos/detalle/' + idPost)
                })
                .catch(function(error) {
                    res.send(error)
                })

        } else {
            return res.redirect('/users/login')
        }

    },

    deletePost: function(req, res) {
        let idPost = req.params.id;

        if (req.session.user != undefined) {
            Productos.findByPk(idPost, {
                include: [
                    {association: 'user'},
                ]
            })
                .then(function(resultado) {
                    if (resultado != undefined) {
                        if (resultado.user.id != req.session.user.id) {
                            return res.send("No tenes permiso para borrar este post")
                        } else {
                            Productos.destroy({
                                where: {
                                    id: idPost
                                },
                                force: true
                            })
                            .then(function(resultado) {
                                return res.redirect('/')
                            })
                            .catch(function(error) {
                                res.send(error)
                            })
                        }
                    }
                })
        } else {
            return res.redirect('/users/login')
        }
    }
}

module.exports = productosController;