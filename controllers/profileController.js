let profileController = {
    index: function (req,res) {
        return res.render('profile')
    },
    edit: function(req,res) {
        return res.render('profile-edit')
    }
};

module.exports = profileController;