const express = require('express');
const router = express.Router();
const { Validator,ValidationError } = require('express-json-validator-middleware');
const productSchema = require('../utils/validation/product-validator')
const Product = require('../services/products/product');

const validator = new Validator({allErrors:true})
const validate = validator.validate;

router.route('/list').get( (req,res) => {
    Product.handleListProducts(res);
});

router.route('/get').get( (req,res) => {
    Product.handleGetProduct(req,res);
});

router.route('/add').post( validate({body:productSchema}), (req,res) => {
    Product.handleAddProduct(req,res);
});

router.route('/update').put( validate({body:productSchema}), (req,res) => {
    Product.handleUpdateProduct(req,res);
});

router.route('/remove').delete( (req,res) => {
    Product.handleDeleteProduct(req,res);
});

router.use( function(err,req,res,next) {
    if(err instanceof ValidationError) {
      res.status(400).send(err);
      next();
    }
    else next(err);
});

module.exports = router;
