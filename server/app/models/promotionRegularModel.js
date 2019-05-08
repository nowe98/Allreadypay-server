'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const PromotionRegular = function(promotionregular){
    this.PromotionRID = promotionregular.PromotionRID;
    this.Picture = promotionregular.Picture;
    this.ProPrice = promotionregular.ProPrice;
    this.ProPoint = promotionregular.ProPoint;
    this.Description = promotionregular.Description;
    this.StartDate = promotionregular.StartDate;
    this.EndDate = promotionregular.EndDate;
    this.StartTime = promotionregular.StartTime;
    this.EndTime = promotionregular.EndTime;
    this.ProductID = promotionregular.ProductID;
    this.AdminID = promotionregular.AdminID

};

PromotionRegular.createPromotion = function(newP,result){
    sql.query("INSERT INTO promotionRegular set ?",newP,function(err,res){
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

PromotionRegular.getPromtionById = function (id, result) {
    sql.query("SELECT * FROM promotionRegular where PromotionRID = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

PromotionRegular.getAllPromotions = function (result) {
    sql.query("SELECT * FROM promotionRegular", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("promtionR: ",res);
            result(null,res)
        }
    });
};

PromotionRegular.updateById = function(id,promotion, result) {
    sql.query("UPDATE promotionRegular SET ? WHERE PromotionRID = ?",[promotion, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

PromotionRegular.delete = function(id, result) {
    sql.query("DELETE FROM promotionRegular WHERE PromotionRID=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};


module.exports = PromotionRegular;