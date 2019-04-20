'use strict'

const express = require('express')
const router = express.Router()
//test
const approutes = require('./approutes')

//routes
const userroutes = require('./userroutes')

router.use('/tasks',approutes)
router.use('/users',userroutes)

module.exports =router