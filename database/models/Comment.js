module.exports = function (sequelize, dataTypes) {

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
        productos_id: {
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
        tableName: "comentarios",
        timestamps: false,
        underscored: false,
    }

    let comment = sequelize.define(alias, cols, conf);

    comment.associate = function (models) {
        comment.belongsTo(models.Usuario, {
            as: 'user',
            foreignKey: "usuario_id",
        })

        comment.belongsTo(models.Producto, {
            as: 'product',
            foreignKey: "productos_id"
        })
    }

    return comment
}