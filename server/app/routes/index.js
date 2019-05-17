'use strict'

const express = require('express')
const router = express.Router()

//routes
const userroutes = require('./userroutes')
const productroutes = require('./productroutes')
const machineroutes = require('./machineroutes')
const typeroutes = require('./machineTyperoutes')
const placeroutes = require('./placeroutes')
const slotroutes = require('./slotroutes')
const adminroutes = require('./adminroutes')
const recentroutes = require('./recentroutes')
const commentroutes = require('./commentroutes')
const eventroutes = require('./eventroutes')
const promoroutes = require('./promotionroutes')
const authroutes = require('./authroutes')

router.use('/users',userroutes)
router.use('/products',productroutes)
router.use('/machines',machineroutes)
router.use('/places',placeroutes)
router.use('/types',typeroutes)
router.use('/slots',slotroutes)
router.use('/admins',adminroutes)
router.use('/recents',recentroutes)
router.use('/comments',commentroutes)
router.use('/events',eventroutes)
router.use('/promo',promoroutes)
router.use('/auth',authroutes)


module.exports =router