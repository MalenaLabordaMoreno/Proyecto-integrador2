let productoController = {
    // listado de productos 
    index: function (req,res) {
        return res.send ('Index de productos') 
    },
    // detalle del prroducto 
    show: function (req,res){
        return res.send ('Detalle de productos')
    } 
};


module.exports = productosController; 
