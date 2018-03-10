const mongoose = require('mongoose')

const shoutSchema = require('../db/schemas/shoutSchema')

const Shout = mongoose.model('shout', shoutSchema)

module.exports = Shout