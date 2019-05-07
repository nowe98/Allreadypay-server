'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Comment = function(comment){
    this.CommentID = comment.CommentID;
    this.Topic = comment.Topic;
    this.Detail = comment.Detail;
    this.ProductID = comment.ProductID;
    this.MachineID = comment.MachineID;
};

Comment.createComment = function(newC,result){
    newC.CommentID=null;
    sql.query("INSERT INTO comments set ?",newC,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err,null);
        }
        else {
            result(null, res.insertId);
        }
    })
};


Comment.getCommentByProductID = function (id, result) {
    sql.query("SELECT * FROM comments where ProductID = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Comment.getAllComments = function (result) {
    sql.query("SELECT * FROM comments", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res)
        }
    });
};

module.exports = Comment;