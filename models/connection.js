////////////////////////
// Import Our Dependencies
////////////////////////
require("dotenv").config() // Loading .env variables
const mongoose = require("mongoose")


// Establish database connection 
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


// Connect to Mongo
mongoose.connect(DATABASE_URL, CONFIG)
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

module.exports = mongoose