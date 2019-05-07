'use strict';
const express = require('express')
const commentController = require('../controllers/commentController');


const router = express.Router()


router.route('/')
  .get(commentController.list_all_comments)
  .post(commentController.create_comment);
   
router.route('/product/:ProductID')
  .get(commentController.read_a_comment_by_id);


module.exports = router