const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shoutSchema = new Schema ({
    subject: String,
    msg: String,
    date: { type : Date, default: Date.now }
})

module.exports = shoutSchema