// Import deps
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const path = require("path")

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

// Model
const {Schema, model} = mongoose

// Make schema
const fighterSchema = new Schema({
    name: String,
    img: String,
    description: String,
    b: String,
    sideb: String,
    upb: String,
    downb: String,
    fsimg: String,
    fs: String,
})

const Smash = model("Smash", fighterSchema)

// Create app object with liquid
const liquid = require("liquid-express-views")
const viewsFolder = path.resolve(__dirname, "views/")
const app = liquid(express(), {root: viewsFolder})

// Middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

////////////////////////////////////////
// ROUTES

app.get("/", (req, res) => {
    res.send("this thing on?")
})

// Seed route



////////////////////////////////////////

// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))