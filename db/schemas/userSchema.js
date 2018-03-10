const mongoose = require('mongoose')

const Schema = mongoose.Schema


const userSchema = new Schema ({
    name: String,
    img: String,
    userSince: Number,
    favCon: String,
    about: String
})

module.exports = userSchema