module.exports = function(sequelize,dataTypes) {

    let alias = "Producto" // nombre que identifico al modelo cuando lo necesito en el controlador

    // let cols = {
    //     //completar con datos de la tabla 
    // }

    let conf = {
        underscored: true,
        tableName: "productos",
        usuarioId: "usuario_id",
        nombreProducto: "nombre_producto"
    }

    let product = sequelize.define(alias,cols,conf);

    product.associate = function(models){
        product.belongsTo(models.User, {
            as: 'users',
            foreignKey: "usuario_id",
            foreignKey: "productos_id"
        })
    }

    return product
}