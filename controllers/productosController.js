let productosController = {
    index: function (req,res) {
        return res.send('Index de productos')
    },
    agregar: function (req,res) {
        return res.render('agregarProductos') //la propiedad va a ser el nombre de la variable que voy a usar en la vista
    },
     //info que voy a usar en la vistac, {propiedad:valor}
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