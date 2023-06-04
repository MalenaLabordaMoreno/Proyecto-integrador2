module.exports = function(sequelize,dataTypes) {

    let alias = "Comentario" // nombre que identifico al modelo cuando lo necesito en el controlador

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
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
        }
    }

    let conf = {
        underscored: true,
        tableName: "comentarios",
        productosId: "productos_id",
        usuarioId: "usuario_id"
    }

    let comment = sequelize.define(alias,cols,conf);

    comment.associate = function(models){
        comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: "usuario_id",
        })
    }
    
    comment.associate = funcion(models)
        comment.belongsTo(models.Product, {
        as: 'product',
        foreignKey: "productos_id"
    }
        )

    return comment
}