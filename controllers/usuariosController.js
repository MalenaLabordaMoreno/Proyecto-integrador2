let usuariosController = {
    register: function (req,res) {
        return res.render('register')
    }, 

    profile: function (req,res) {
        return res.render('profile')
    },
    edit: function(req,res) {
        return res.render('profile-edit')
    },
    login: function(req,res) {
        return res.render('login')
    }
};

module.exports = usuariosController;
