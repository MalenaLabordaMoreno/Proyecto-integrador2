let db = require("../database/models");
let op = db.Sequelize.Op;
let bcryptjs = require('bcryptjs');

let usuariosController = {
        register: function (req,res) { // COMPLETAR SESSION
            return res.render('register')
        }, 
        profile: function (req,res) { // DETALLE DE PRODUCTO == DETALLE PERFIL
            db.Usuario.findByPk(req.params.id, {
                include: [
                    {association: 'comments' },
                    {association: 'products', order: ['createdAt', 'ASC'] }
                ]
            })
            .then(function(resultado){
                    if (resultado != undefined){
                        //return res.send(resultado)
                         if (resultado.products.length < 0){
                            let errors = {}
                            errors.message = "El usuario no ha publicado productos";
                            res.locals.errors = errors;
                            return res.render('profile', {info_usuario : resultado})
        
                        } else {
                            return res.render('profile', {info_usuario : resultado}) //chequear nombre en vistas y aca
                        }
                    } else {
                        return res.send ("Lo sentimos, no encontramos al usuario")
                    }
                    
                })

            .catch(function(error){
                console.log(error);
            })
        },
        edit: function(req,res) {
            if (req.session.user) {
                return res.render('profile-edit')
            } else {
                return res.redirect('/users/login')
            }
        },
        processEdit: function(req,res) { // COMPLETAR
            let form = req.body;

            // Validar que todo el formulario esté completo. Sino buscar la data que el usuario no quiere actualizar

            db.Usuario.update({})
        },
        store: function(req, res){
            let form = req.body; //form guarda toda la info que va por post
            console.log(form);
            let errors = {}

            if(req.body.email == "") {
                errors.message = "El email no puede estar vacío"; //cargamos el mensaje
                res.locals.errors = errors; //Usamos locals para pasarlo a la vista
                return res.render('register'); //Renderizamos la vista 
            } //Podemos realizar una nueva validación con un else if. 


            // if(req.body.email == "") {
            //     errors.message = "Este campo email debe ser obligatorio"; 
            //     res.locals.errors = errors; 
            //     return res.render('register'); 
            // } 

            //req.body.contrasena.length >= 3
        
            //Encriptar la contraseña antes de guardar en la base de datos.
            let user = {
                email: form.email,
                usuario: form.usuario,
                contrasena: bcryptjs.hashSync(form.contrasena, 10),
                fecha_nacimiento: form.fecha_nacimiento,
                dni: form.dni,
                imagenUsuario: form.imagenUsuario
            }    
        
            //Usar un método de Sequelize para guardar datos.
            db.Usuario.create(user) //Pasar un objeto literal con los datos a guardar.
                .then(function(usuarioCreado){ //retorna el elemento creado
                    //Dentro del then debería redireccionar a otra ruta.
                    console.log(usuarioCreado);
                    return res.redirect('/users/login');
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
                    let compare = bcryptjs.compareSync(req.body.contrasena, usuarioEncontrado.contrasena)
                    
                    if(compare){
                        //Ponerlos en session.
                        req.session.user = {
                            id: usuarioEncontrado.id,
                            email: usuarioEncontrado.email,
                            userName: usuarioEncontrado.usuario,
                        }
                        //Preguntar si el usuario tildó el checkbox para recordarlo
                        // return res.send (req.body);
                        if(req.body.recordarme != undefined){
                            res.cookie('userId', usuarioEncontrado.id, {maxAge: 1000*60*123123123})
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
            res.clearCookie('userId');
    
            //Destruyo la cookie
            return res.redirect('/');
            //return res.render('login');
        }, 
       editarPerfil: function(req,res){
        let form = req.body;

        if (req.session.user != undefined){
            db.Usuario.findByPk(req.params.id) 
            .then(function(resultado){
                if (resultado != undefined){
                    if (resultado.id != req.session.user.id) {
                        return res.send("No tenes permiso para editar este usuario")
                    }
                    else{ 
                        let idUser = resultado.id;
                        let usuarioActualizado = {
                            email: form.email,
                            usuario: form.usuario,
                            contrasena:form.contrasena,
                            fecha_nacimiento: form.fecha_nacimiento,
                            dni: form.numero_documento,
                            foto_perfil: form.foto_perfil
                            
                        }
                        
                        if (form.email === "") {
                            usuarioActualizado.email = resultado.email
                        }
    
                        if (form.usuario === "") {
                            usuarioActualizado.usuario = resultado.usuario
                        }
    
                        if (form.contrasena === "") {
                            usuarioActualizado.contrasena= resultado.contrasena
                        }
    
                        if (form.fecha_nacimiento === "") {
                            usuarioActualizado.fecha_nacimiento= resultado.fecha_nacimiento
                        }
    
                        if (form.numero_documento === "") {
                            usuarioActualizado.numero_documento= resultado.numero_documento
                        }
    
                        if (form.foto === "") {
                            usuarioActualizado.foto_perfil= resultado.foto_perfil
                        }
                        db.Usuario.update(usuarioActualizado, {
                            where: {
                                id: idUser
                            },
                        })
                            .then(function(result){
                                return res.redirect('/users/profile/' + idUser)
                            })
                            .catch(function(error) {
                                return res.send(error)
                            })
                    }
            }
        })
        .catch(function(error) {
            return res.send(error)
        })
       }
}}
module.exports = usuariosController;