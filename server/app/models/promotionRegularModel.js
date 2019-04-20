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

module.exports = PromotionRegular;