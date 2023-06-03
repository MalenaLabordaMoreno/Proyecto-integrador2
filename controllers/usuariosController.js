const { name } = require("ejs");
let db = require("../database/models");
let op = db.Sequelize.Op;
let bcriptjs = require('bcryptjs');

let usuariosController = {
        register: function (req,res) {
            return res.render('register')
        }, 
        profile: function (req,res) {
            return res.render('profile', {lista_productos: db})
        },
        edit: function(req,res) {
            return res.render('profile-edit')
        },
        login: function(req,res){
                //Si el usuario está logueado redirigirlo a home
                if(req.session.user != undefined){
                    return res.redirect('/')
                } else                 
                    return res.render('login')
        },
        store: function(req, res){
            let form = req.body
        
            //Encriptar la contraseña antes de guardar en la base de datos.
            let user = {
                email:form.email,
                name: form.usuario,
                contraseña: bcriptjs.hashSync(form.contraseña, 10),
            }
        
            //Usar un método de Sequelize para guardar datos.
            db.User.create(user) //Pasar un objeto literal con los datos a guardar.
                .then(function(usuarioCreado){ //retorna el elemento creado
                    //Dentro del then debería redireccionar a otra ruta.
                    console.log(usuarioCreado);
                    return res.redirect('/index');
                })
                .catch(function(e){
                    console.log(e);
                })
        },
        };
module.exports = usuariosController;


