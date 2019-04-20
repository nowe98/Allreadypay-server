'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Comment = function(comment){
    this.CommentID = comment.CommentID;
    this.Topic = comment.Topic;
    this.ProductID = comment.ProductID;
    this.MachineID = comment.MachineID;
};

module.exports = Comment;