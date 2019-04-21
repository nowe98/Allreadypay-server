'use strict'

const express = require('express')
const router = express.Router()
//test
const approutes = require('./approutes')

//routes
const userroutes = require('./userroutes')
const productroutes = require('./productroutes')
const machineroutes = require('./machineroutes')

router.use('/tasks',approutes)
router.use('/users',userroutes)
router.use('/products',productroutes)
router.use('/machine',machineroutes)


module.exports =router