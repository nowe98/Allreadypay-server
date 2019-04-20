'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Product = function(product){
    this.ProductID = product.ProductID;
    this.ProductName = product.productName;
    this.Picture = product.Picture;
    this.Price = product.Price;
    this.PPoint = product.PPoint;
    this.Volume = product.Volume;
    this.Company = product.Company;
    this.Description = product.Description;
    this.ProPrice = product.ProPrice;
    this.ProPoint = product.ProPoint;

};

module.exports = Product;