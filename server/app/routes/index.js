'use strict'

const express = require('express')
const router = express.Router()
//test
const approutes = require('./approutes')

//routes
const userroutes = require('./userroutes')
const productroutes = require('./productroutes')
const machineroutes = require('./machineroutes')
const typeroutes = require('./machineTyperoutes')
const placeroutes = require('./placeroutes')
const slotroutes = require('./slotroutes')
const adminroutes = require('./adminroutes')
const recentroutes = require('./recentroutes')

router.use('/tasks',approutes)
router.use('/users',userroutes)
router.use('/products',productroutes)
router.use('/machines',machineroutes)
router.use('/places',placeroutes)
router.use('/types',typeroutes)
router.use('/slots',slotroutes)
router.use('/admins',adminroutes)
router.use('/recents',recentroutes)


module.exports =router