'use strict';
const express = require('express')
const appController = require('../controllers/appController');

const router = express.Router()
// todoList Routes
router.route('/')
  .get(appController.list_all_tasks)
  .post(appController.create_a_task);
   
router.route('/:taskId')
  .get(appController.read_a_task)
  .put(appController.update_a_task)
  .delete(appController.delete_a_task);

module.exports = router