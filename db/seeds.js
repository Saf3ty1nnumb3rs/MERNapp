require("dotenv").config();
const mongoose = require("mongoose");

const db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to mongoDB");
});

db.on('error', (err) => {
    console.log(err)
})
