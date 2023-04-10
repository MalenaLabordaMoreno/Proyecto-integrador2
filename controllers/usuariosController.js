const lista_productos = require('../data/data');
let usuariosController = {
    register: function (req,res) {
        return res.render('register')
    }, 
    profile: function (req,res) {
        return res.render('profile', {lista_productos: lista_productos })
    },
    edit: function(req,res) {
        return res.render('profile-edit')
    },
    login: function(req,res) {
        return res.render('login')
    }
};

module.exports = usuariosController;
