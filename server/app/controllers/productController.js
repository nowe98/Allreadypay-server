'use strict'

const Product = require('../models/productModel');

exports.list_all_products = function (req, res) {
    Product.getAllProduct(function(err, product) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', product);
        res.send(product);
    });
};

exports.create_product = function(req, res) {
    const new_product = new Product(req.body);
  
    //handles null error 
    if(!new_product.ProductID||!new_product.ProductName){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
        Product.createProduct(new_product, function(err, product) {
            if (err)
                res.send(err);
            res.json(product);
        });
  }
}

exports.read_a_product = function(req, res) {
    Product.getProductById(req.params.ProductID, function(err, product) {
      if (err)
        res.send(err);
      res.json(product[0]);
    })
}

exports.update_a_product = function(req, res) {
    Product.updateById(req.params.ProductID, new Product(req.body), function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    })
}

exports.delete_a_product = function(req, res) {
    Product.delete( req.params.ProductID, function(err, product) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    })
}