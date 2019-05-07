'use strict'

const Comment = require('../models/commentModel');

exports.list_all_comments = function (req, res) {
    Comment.getAllComments(function(err, comments) {

      console.log('Comments controller')
      if (err)
          res.send(err);

      console.log('res', comments);
      res.json({"status":200,"message":"Data fetched successfully!", "Comments":comments});
    });
};

exports.create_comment = function(req, res) {
    const new_comment = new Comment(req.body);
  
    //handles null error 
    if(!new_comment.ProductID||!new_comment.MachineID){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
       Comment.createComment(new_comment, function(err,r) {
            if (err)
                res.send(err);
            res.json({"status":200,"message":"Add table complete."});
        });
  }
};

exports.read_a_comment_by_id = function(req, res) {
    Comment.getCommentByProductID(req.params.ProductID, function(err, comment) {
      if (err)
        res.send(err);
      res.json(comment);
    })
}

