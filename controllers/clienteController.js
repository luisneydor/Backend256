const Cliente = require('../models/Clientes');

//funcion  agragar clentes

exports.agregarClientes = async(req, res ) => {
    try {
        let clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);

    }catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al agregar cliente')
    }

}

// funcion buscar

exports.buscarClientes = async(req,res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes)

    }catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al mostrar')
    }

}
//funcion buscar un cliente

exports.mostrarClientes = async(req,res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).send({msg: "cliente no encontrado con el id"})
        }else{ 
            res.json(clientes);
        }

    }catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al mostrar el cliente')
    }

}

//modificaar clienrte metdo patch

exports.modificarClientes = async (req,res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!clientes) {
            res.status(404).send({msg: "cliente no encontrado con el id"})
        }else{ 
            res.json(clientes);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al modificar el cliente')
    }

}

exports.actualizarClientes = async(req, res) => {

    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if (!clientes) {
            res.status(404).send({msg: "cliente no encontrado con el id"})
        }else{ 
            res.json(clientes);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al actualizar el cliente')
    }
}
//eliminar cliente
exports.eliminarClientes = async (req, res) => {

    try {
        const clientes = await Cliente.findById(req.params.id);        
        if (!clientes) {
            res.status(404).send({msg: "cliente no encontrado con el id"})
            }else{ 
                await Cliente.findOneAndDelete( {_id: req.params.id})
                res.json({msg : "cliente eliminado"});
            }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un erro al actualizar el cliente')
    }
}