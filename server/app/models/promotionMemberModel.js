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

module.exports = PromotionMember;