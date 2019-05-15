'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Product = function(product){
    this.ProductID = product.ProductID;
    this.ProductName = product.ProductName;
    this.Picture = product.Picture;
    this.Price = product.Price;
    this.PPoint = product.PPoint;
    this.Volume = product.Volume;
    this.Company = product.Company;
    this.Description = product.Description;
    this.ProPrice = product.ProPrice;
    this.ProPoint = product.ProPoint;
    this.Sales = product.Sales;

};

Product.createProduct = function(newProduct,result){
    if(!newProduct.PPoint)
        newProduct.PPoint=0;
    if(!newProduct.Sales)
        newProduct.Sales=0;
    newProduct.ProductID = null;
    sql.query("INSERT INTO product set ?",newProduct,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err,null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

Product.getProductById = function (ProductID, result) {
    sql.query("SELECT * FROM product where ProductID = ?", ProductID, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Product.getAllProduct = function (result) {
    sql.query("SELECT * FROM product", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("user: ",res);
            result(null,res)
        }
    });
};

Product.updateById = function(ProductID,product, result) {
    sql.query("UPDATE product SET ? WHERE ProductID = ?",[product, ProductID], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

Product.delete = function(id, result) {
    sql.query("DELETE FROM product WHERE ProductID=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};

Product.getProductByMachine = function(id, result) {
    sql.query("CALL get_productInMachine(?)",id,function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}

Product.updateSales = function(id, result) {
    sql.query("UPDATE product SET Sales = Sales + Price WHERE ProductID = ?",id, function(err, res) {
        if(err) {
            console.log("error: ", err)
        }
    })
}

module.exports = Product;