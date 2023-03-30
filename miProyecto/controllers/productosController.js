let productosController = {
    index: function (req,res) {
        return res.send('Index de productos')
    },
    agregar: function (req,res) {
        return res.render('agregar_productos', {'title': 'Agregar producto'})
    },
    listaProductos: function (req,res) {
        let lista_productos = [
            {
                imagen: "/images/products/heladera_gafa.jpg",
                nombre: "Heladera Gafa",
                decripcion: "Heladera Gafa 2 puertas con freezer",
                fecha_de_carga: "2021-05-01",
            }
        ]
        return res.render('')
    }
};


module.exports = productosController;