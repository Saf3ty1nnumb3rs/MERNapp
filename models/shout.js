const mongoose = require('mongoose')

const shoutSchema = require('../db/schemas/commentSchema')

const Shout = mongoose.model('shout', shoutSchema)

module.exports = Shout