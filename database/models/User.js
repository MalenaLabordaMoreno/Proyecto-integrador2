module.exports = function(sequelize,dataTypes) {

    let alias = "Usuario" // nombre que identifico al modelo cuando lo necesito en el controlador

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING 
        },
        contrasena: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        imagenUsuario: {
            type: dataTypes.STRING
        }
    }

    let conf = {
        tableName: "users",
        timestamps: false,
        underscored: false,
    }

    let user = sequelize.define(alias,cols,conf);

    user.associate = function(models) {
        user.hasMany(models.Producto, {
            as: 'products', // Este alias representa a los productos cuando llamamos a los usuarios
            foreignKey: 'usuario_id'
        })

        user.hasMany(models.Comentario, {
            as: 'comments',
            foreignKey: 'usuario_id'
        })
    }

    // user.associate = function(models){
    //     user.hasMany(models.Product, {
    //         as: 'products'
    //     })
    // }

    return user
}