const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = require('./userSchema')
const shoutSchema = require('./shoutSchema')


const conSchema = new Schema ({
    name: String,
    theme: String,
    location: String,
    date: String,
    img: String,
    users:[userSchema],
    shouts:[shoutSchema]
})


module.exports = conSchema