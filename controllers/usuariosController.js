// login controller 
let loginController = {
    index: function(req,res) {
        return res.render('login',{'title':'Login user'})
    },

};

// register controller 
let registerController = {
    index: function (req,res) {
        return res.render('register')
    },

};

// profile controller 
let profileController = {
    index: function (req,res) {
        return res.render('profile')
    },
    edit: function(req,res) {
        return res.render('profile-edit')
    }
};

module.exports = profileController;
module.exports = registerController;
module.exports = loginController;