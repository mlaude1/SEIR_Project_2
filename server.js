// Import deps
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
// const mongoose = require("mongoose")
const path = require("path")

const SmashRouter = require("./controllers/smash")
const UserRouter = require("./controllers/user")
const session = require("express-session") // session middleware
const MongoStore = require("connect-mongo") // save sessions in mango



// Create app object with liquid
const liquid = require("liquid-express-views")
const viewsFolder = path.resolve(__dirname, "views/")
const app = liquid(express(), {root: viewsFolder})

// Middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false
}))

////////////////////////////////////////
// ROUTES

app.get("/", (req, res) => {
    res.render("index.liquid")
})

// Register Smash Router
app.use("/smash", SmashRouter)

// Register User Router
app.use("/user", UserRouter)

// // Seed route
// app.get("/smash/seed", (req, res) => {
    
   


// // Index route 
// app.get("/smash", (req, res) => {
//     Smash.find({})
//     .then((fighters) => {
//         res.render("index.liquid", {fighters})
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// // New route
// app.get("/smash/new", (req, res) => {
//     res.render("new.liquid")
// })

// // Create route
// app.post("/smash", (req, res) => {
//     Smash.create(req.body)
//     .then((fighter) => {
//         res.redirect("/smash")
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// // Edit Route
// app.get("/smash/:id/edit", (req, res) => {
//     const id = req.params.id
//     Smash.findById(id)
//     .then((fighter) => {
//         res.render("edit.liquid", {fighter})
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// // Update Route
// app.put("/smash/:id", (req, res) => {
//     const id = req.params.id
//     Smash.findByIdAndUpdate(id, req.body, {new: true})
//     .then((fighter) => {
//         res.render("show.liquid", {fighter})
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// // Destroy route
// app.delete("/smash/:id", (req, res) => {
//     const id = req.params.id
//     Smash.findByIdAndRemove(id)
//     .then((fighter) => {
//         res.redirect("/smash")
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// // ==============UNDER CONSTRUCTION============ 
// app.get("/smash/previous/:id", (req, res) => {
//     console.log('hi')
    
//     const id = req.params.id
//     console.log(Smash.find({}))
    
//     Smash.findById(id)
//     .then((fighter) => {
//         res.render("show.liquid", {fighter})
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// app.get("/smash/next", (req, res) => {
//     console.log('hi')
//     console.log(Smash.find({}))
//     Smash.find({})
//     .then((fighters) => {
//         res.render("index.liquid", {fighters})
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// // ==============UNDER CONSTRUCTION============ 

// // Show route 
// app.get("/smash/:id", (req, res) => {
//     const id = req.params.id
//     Smash.findById(id)
//     .then((fighter) => {
//         res.render("show.liquid", {fighter})
//     })
//     .catch((error) => {
//         res.json({error})
//     })
// })

// ////////////////////////////////////////

// Listener
const PORT = process.env.PORT
app.listen(PORT, console.log(`listening on port ${PORT}`))