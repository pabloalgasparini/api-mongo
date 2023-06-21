const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json())

require('./database');

const productosSchema = mongoose.Schema({
    nom_prod: {
        type: String,
        required: true
    },
    precio_prod: {
        type: Number,
        required: true
    }
});

const Producto = mongoose.model('Producto', productosSchema); // Definir el modelo

app.get('/productos', (req, res) => {
    Producto.find() // Utilizar directamente el modelo para buscar productos
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json({ message: err }));
});

app.post('/productos', (req, res) => {
    const producto = new Producto(req.body); // Crear instancia del modelo
    producto.save()
        .then(data =>{ res.json(data)
            console.log('Producto guardado correctamente');
        })
        .catch(err => res.json({ message: err }));
});

app.listen(4000);
console.log('Servidor corriendo en el puerto', 4000);
