const express = require('express')
const router = express.Router({
    mergeParams: true
})

const Con = require('../models/con')
const Shout = require('../models/shout')

//SHOUT Index ---------------------//////
router.get('/', (req, res) => {
    Con.findById(req.params.consId)
    .then((cons) => {
        const shouts = cons.shouts
        res.json(shouts)
    })
    
})

module.exports = router