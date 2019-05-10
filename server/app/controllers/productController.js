'use strict'

const Product = require('../models/productModel');

exports.list_all_products = async function (req, res) {
    await Product.getAllProduct(function(err, products) {

        console.log('controller')
        if (err)
            res.send(err);

        var newproducts = products.map((product) => ({
          product_ID: product.ProductID,
          productDescription: product.ProductName,
          ImgURL: product.Picture,
          price: product.Price,
          Promotion: "-"
        }));
        
        console.log('res', newproducts);
        res.json({"status":200,"message":"Data fetched successfully!", "ProductList":newproducts});

    });
};

exports.list_all_products_admin = async function (req, res) {
  await Product.getAllProduct(function(err, products) {

      if (err)
          res.send(err);

      
      console.log('res', products);
      res.json({"status":200,"message":"Data fetched successfully!", "ProductList":products});

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

exports.list_product_by_machine = function(req, res) {
  Product.getProductByMachine(req.params.MachineID, function(err, products) {
    console.log('controller')
        if (err)
            res.send(err);

        var newproducts = products[0].map((product) => ({
          product_ID: product.ProductID,
          productDescription: product.ProductName,
          ImgURL: product.Picture,
          price: product.Price,
          Promotion: "-"
        }));
        
        console.log('res', newproducts);
        res.json({"status":200,"message":"Data fetched successfully!", "ProductList":newproducts});

  })
}