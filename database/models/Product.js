module.exports = function(sequelize,dataTypes) {

    let alias = "Producto" // nombre que identifico al modelo cuando lo necesito en el controlador

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
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
        imagen: {
            type:dataTypes.STRING
        }
    }

    let conf = {
        tableName: "productos",
        timestamps: false,
        underscored: false,
    }

    let product = sequelize.define(alias,cols,conf);

    product.associate = function(models) {
        product.belongsTo(models.Usuario, {
            as: 'user', // Este alias representa al usuario cuando llamamos a los productos
            foreignKey: 'usuario_id'
        })

        product.hasMany(models.Comentario, {
            as: 'comments',
            foreignKey: 'productos_id'
        })
    }

    // product.associate = function(models){
    //     product.belongsTo(models.User, {
    //         as: 'users',
    //         foreignKey: "usuario_id",
    //         foreignKey: "productos_id"
    //     })
    // }

    return product
}