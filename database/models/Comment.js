module.exports = function(sequelize,dataTypes) {

    let alias = "Comentario" // nombre que identifico al modelo cuando lo necesito en el controlador

    // let cols = {
    //     //completar con datos de la tabla 
    // }

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