'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const PromotionMember = function(promotionmember){
    this.PromotionMID = promotionmember.PromotionMID;
    this.Picture = promotionmember.Picture;
    this.ProPrice = promotionmember.ProPrice;
    this.ProPoint = promotionmember.ProPoint;
    this.Description = promotionmember.Description;
    this.StartDate = promotionmember.StartDate;
    this.EndDate = promotionmember.EndDate;
    this.StartTime = promotionmember.StartTime;
    this.EndTime = promotionmember.EndTime;
    this.ProductID = promotionmember.ProductID;
    this.AdminID = promotionmember.AdminID

};

PromotionMember.createPromotion = function(newP,result){
    sql.query("INSERT INTO promotionMember set ?",newP,function(err,res){
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

PromotionMember.getPromtionById = function (id, result) {
    sql.query("SELECT * FROM promotionMember where PromotionMID = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

PromotionMember.getAllPromotions = function (result) {
    sql.query("SELECT * FROM promotionMember", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("promtionM: ",res);
            result(null,res)
        }
    });
};

PromotionMember.updateById = function(id,promotion, result) {
    sql.query("UPDATE promotionMember SET ? WHERE PromotionMID = ?",[promotion, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

PromotionMember.delete = function(id, result) {
    sql.query("DELETE FROM promotionMember WHERE PromotionMID=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};

module.exports = PromotionMember;