const express = require('express');
const router = express.Router();
var { Validator,ValidationError } = require('express-json-validator-middleware');
const Product = require('../services/products/product');

router.route('/list').get( (req,res) => {
    Product.handleListProducts(res);
});

router.route('/get').get( (req,res) => {
    Product.handleGetProduct(req,res);
});

router.route('/add').post( (req,res) => {
    Product.handleAddProduct(req,res);
});

router.route('/update').put( (req,res) => {
    Product.handleUpdateProduct(req,res);
});

router.route('/remove').delete( (req,res) => {
    Product.handleDeleteProduct(req,res);
});

module.exports = router;
