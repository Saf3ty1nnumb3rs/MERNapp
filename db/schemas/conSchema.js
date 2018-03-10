const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = require('./userSchema')
const shoutSchema = require('./shoutSchema')


const conSchema = new Schema ({
    theme: String,
    location: String,
    date: Number,
    img: String,
    users:[userSchema],
    shouts:[shoutSchema]
})


module.exports = conSchema