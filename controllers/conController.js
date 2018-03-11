const express = require('express')
const router = express.Router({
    mergeParams: true
})

const Con = require('../models/con')
const Shout = require('../models/shout')
const User = require('../models/user') 

//CON Index or List Show ----------------///////////
router.get('/', async (req, res) => {
    try {
        const cons = await Con.find({})
    res.json(cons)
    } catch(err) {
        console.log(err)
    }
  })


  //CON Show Individual Con -------------////////////
  router.get('/:id', async (req, res) => {
    try {
      const conId = req.params.id
      const con = await Con.findById(conId)
      res.json(con)
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  })


module.exports = router