const  express = require('express');
const  conectarBD = require('../config/db');
const  cors = require('cors');


// creamosd la variable app
const app = express();
const port =  process.env.port ||  5500;

//conexion base de dartos
conectarBD();
app.use(cors());
//uso framework express
app.use(express.json());

//ruta para consumir la api clienye 
//app.use('/api/clientes', require('../routes/rutasCliente')); /////

//ruta para consumir la api producto
app.use('/api/productos', require('../routes/rutasProducto'));

// ruta pqara verificar nuestro servidor rn la web
app.get('/', (req, res) => {
res.send("hola estamos conectados desde la web");

});

// ruta de niuestro servisor

app.listen(port, () => {
    console.log("El servidor esta conectado http://localhost:5500/")
});