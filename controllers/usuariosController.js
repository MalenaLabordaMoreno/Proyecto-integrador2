const { name } = require("ejs");
let db = require("../database/models");
let op = db.Sequelize.Op;
let bcriptjs = require('bcryptjs');

let usuariosController = {
        register: function (req,res) {
            return res.render('register')
        }, 
        profile: function (req,res) {
            return res.render('profile', {
                info_usuario: db.Usuario,
                comentario:db.Comentario
            })
        },
        edit: function(req,res) {
            return res.render('profile-edit')
        },
        store: function(req, res){
            let form = req.body; //form guarda toda la info que va por post
        
            //Encriptar la contraseña antes de guardar en la base de datos.
            let user = {
                email: form.email,
                name: form.usuario,
                contrasena: bcriptjs.hashSync(form.contrasena, 10),
                //remember_token = ""
            }
        
            //Usar un método de Sequelize para guardar datos.
            db.Usuario.create(user) //Pasar un objeto literal con los datos a guardar.
                .then(function(usuarioCreado){ //retorna el elemento creado
                    //Dentro del then debería redireccionar a otra ruta.
                    console.log(usuarioCreado);
                    return res.redirect('/');
                })
                .catch(function(e){
                    console.log(e);
                })
        },
        login: function(req, res){
            //Si el usuario está logueado, redirigirlo a home (localhost/users/login)
            if(req.session.user != undefined){
                return res.redirect('/') //el redirect manda a otra ruta, para que el servidor ejecuta el metodo enlazado a esta, que renderiza la vista
            } else {
                return res.render('login');
            }
        },
        processLogin: function(req, res){
            //Tengo que buscar los datos de la db.
            db.Usuario.findOne({
                where: [{email:req.body.email}]
            })
               .then(function(usuarioEncontrado){
                let errores = {}
                
                if (usuarioEncontrado == null){
                    errores.message = "El email no existe"
                    
                    res.locals.errors = errores;
                    return res.render('login');
                } else {
                    //Validar contraseña antes de loguear
                    let compare = bcriptjs.compareSync(req.body.contrasena, usuarioEncontrado.contrasena)
                    
                    if(compare){
                        //Ponerlos en session.
                        req.session.user = {
                            email: usuarioEncontrado.email,
                            userName: usuarioEncontrado.name,
                        }
                        //Preguntar si el usuario tildó el checkbox para recordarlo
                        // return res.send (req.body);
                        if(req.body.recordarme != undefined){
                            res.cookie('cookieEspecial', 'el dato que quiero guardar', {maxAge: 1000*60*123123123})
                        }
                        //Y si el usuario quiere, agregar la cookie para que lo recuerde.
                        
                        return res.redirect('/');
                    } else {
                        errores.message = "La contraseña es incorrecta.";
                        res.locals.errors = errores;
                        return res.render("login");
                    }
                }           
    
               })
               .catch(function(e){
                console.log(e);
               }) 
        
        },
        logout: function(req, res){
            // destruir session
            req.session.destroy();
    
            //Destruyo la cookie
            return res.redirect('/');
            //res.ClearCookie('userId');
            //return res.render('login');
        }
    }
    module.exports = usuariosController;