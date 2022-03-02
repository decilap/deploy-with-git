const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

var productController = require('./controller/productController');
app.use(express.static('./dist/deploy-test'));

//product api route
app.use('/api/products', productController);

//angular index
app.get('/*', function(req,res) {
    res.sendFile("index.html", {root: 'dist/deploy-test'});
});

//app.get('/api/data/:id', productController.getProductsById);
//app.get('/api/data', productController.getProducts);

app.listen(process.env.PORT || 8080);

