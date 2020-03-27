'use strinct'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://curso-admin:ZizxobV9vkxWyR2r@curso-node-orkip.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

//Carrega schemas
const Product = require('./models/product');

//Carrega rotas
const indexRoute = require('./routes/index.js');
const productsRoute = require('./routes/products.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productsRoute); 



module.exports = app;