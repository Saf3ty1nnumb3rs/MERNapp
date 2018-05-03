const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    console.log(res)
    res.render('../src/components/LandingPage')
})



module.exports = router