const mongoose = require('mongoose')

const conSchema = require('../db/schemas/conSchema')


const Con = mongoose.model('con', conSchema)


module.exports = Con