const Producto = require('../models/productos');

exports.agregarProducto = async(req, res ) => {  ////funcion  agregar producto
   
    try {
        let productos = new Producto(req.body);
        await productos.save();
        res.json(productos);
    }catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al agregar producto')
    }
}

exports.buscarProducto = async(req,res) => {      //// funcion buscar producto
    
    try {
        let productos = await Producto.find();
        res.json(productos)

    }catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al mostrar')
    }

}


exports.mostrarProductos = async(req,res) => {   /////funcion buscar un producto
    
    try {
        let productos = await Producto.findById(req.params.id);

        if (!productos) {
            res.status(404).send({msg: "Producto no encontrado con el id"})
        }else{ 
            res.json(productos);
        }
    }catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al mostrar el Producto')
    }
}

exports.modificarProductos = async (req,res) => {  //modificaar clienrte metdo patch
    try {
        let productos = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!productos) {
            res.status(404).send({msg: "cliente no encontrado con el id"})
        }else{ 
            res.json(productos);
        }      
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al modificar el cliente')
    }
}
exports.actualizarProducto = async(req, res) => {    //actualizar prodcuto
    try {
        let productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if (!productos) {
            res.status(404).send({msg: "Producto no encontrado con el id"})
        }else{ 
            res.json(productos);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al actualizar el Producto')
    }
}
exports.eliminarProducto = async (req, res) => {    /////eliminar prodcuto
    try {
        const productos = await Producto.findById(req.params.id);        
        if (!productos) {
            res.status(404).send({msg: "Producto no encontrado con el id"})
            }else{ 
                await Producto.findOneAndDelete( {_id: req.params.id})
                res.json({msg : "Producto ha sido eliminado"});
            }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al actualizar el cliente')
    }
}