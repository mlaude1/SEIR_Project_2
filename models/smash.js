////////////////////////
// import dependencies
////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")


////////////////////////////////////////////////
// Create our Smash Model
////////////////////////////////////////////////
// pull schema and model from mongoose
// Model
const {Schema, model} = mongoose

// Make schema
const fighterSchema = new Schema({
    name: String,
    img: String,
    description: String,
    b: String,
    bdet: String,
    sideb: String,
    sidebdet: String,
    upb: String,
    upbdet: String,
    downb: String,
    downbdet: String,
    fsimg: String,
    fs: String,
    fsdet: String,
    username: String
})

const Smash = model("Smash", fighterSchema)

////////////////////////
// export the fruit model
////////////////////////

module.exports = Smash