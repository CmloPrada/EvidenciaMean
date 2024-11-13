//Inicializamos las dependencias que creamos 

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const port = 3000;




// URL de conexión a la base de datos MongoDB

const mongoDB = 'mongodb://localhost:27017/EvidenciaMEAN';




// Conectar a MongoDB

mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));

db.once('open', () => {

  console.log('Conectado a MongoDB');

});




// Usamos ExpressJS

app.use(express.json());




// Habilitar CORS

app.use(cors());




// Definir un esquema y un modelo

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({

  nombre: String,

  apellido: String,

  edad: String,

}, { collection: 'Usuario' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);




//Creamos la API,  ruta para obtener todos los aprendices

app.get('/usuarios', async (req, res) => {

  try {

    const usuarios = await Usuario.find();

    res.json(usuarios);

  } catch (err) {

    res.status(404).send(err);

  }

});




app.listen(port, () => {

  console.log(`La aplicación está escuchando en http://localhost:${port}`);

});
