module.exports = function(sequelize,dataTypes) {

    let alias = "Usuario" // nombre que identifico al modelo cuando lo necesito en el controlador

    // let cols = {
    //     //completar con datos de la tabla 
    // }

    let conf = {
        underscored: true,
        tableName: "users",
        fechaNacimiento: "fecha_nacimiento"
    }

    let user = sequelize.define(alias,cols,conf);

    user.associate = function(models){
        user.hasMany(models.Product, {
            as: 'products'
        })
    }

    return user
}