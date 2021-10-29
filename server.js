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
    bdet: String,
    sideb: String,
    sidebdet: String,
    upb: String,
    upbdet: String,
    downb: String,
    downbdet: String,
    fsimg: String,
    fs: String,
    fsdet: String
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
    res.send("go to /smash homie!")
})

// Seed route
app.get("/smash/seed", (req, res) => {
    const seed =
    [
      {
        name: 'Waluigi',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F25247b92-6844-4fef-8ed8-5055cc35bf58%2Fdbuztua-01c11142-f1bc-4322-a9b6-28de4044364a.png%2Fv1%2Ffill%2Fw_1001%2Ch_798%2Cstrp%2Fwaluigi_promo_art_recreation_render_by_nintega_dario_dbuztua-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzI1MjQ3YjkyLTY4NDQtNGZlZi04ZWQ4LTUwNTVjYzM1YmY1OFwvZGJ1enR1YS0wMWMxMTE0Mi1mMWJjLTQzMjItYTliNi0yOGRlNDA0NDM2NGEucG5nIiwid2lkdGgiOiI8PTEzNTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kJuxH-4aIoTPgWsJ0qNqJSkIIfvN1v7Svz1HuFX2wQ8&f=1&nofb=1',
        description: "He plays the role of Luigi's arch-rival and accompanies Wario in spin-offs from the main Mario series, often for the sake of causing mischief and problems.",
        b: 'Liar ball',
        sideb: 'Whirluigi',
        upb: 'Twist dunk',
        downb: 'Drop rocket',
        fsimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTY2XcCH3ags%2Fmaxresdefault.jpg&f=1&nofb=1',
        fs: 'Bob-ombs away'
      }, {
        name: 'Knuckles',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fe9e_Zq0W6iI%2Fmaxresdefault.jpg&f=1&nofb=1',
        description: 'Ugandan knuckles',
        b: 'drill claw',
        sideb: 'hammer punch',
        upb: 'spiral upper',
        downb: 'spin dash',
        fsimg:'',
        fs: 'maximum heat knuckles attack'
      }, {
        name: 'Master Chief',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-5eb45219601d7c24ef42421f3b53b956-c&f=1&nofb=1',
        description: 'A man with a plan',
        b: 'Needler',
        sideb: 'Sticky Plasma Grenade',
        upb: 'Jump Pack',
        downb: 'Swap Artillery',
        fsimg:'',
        fs: 'M12 Light Reconnaissance Warthog'
      }, {
        name: 'Crash Bandicoot',
        img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Ffantendo%2Fimages%2Fc%2Fc7%2FCrashifiedSmashified.png%2Frevision%2Flatest%3Fcb%3D20160401195714&f=1&nofb=1',
        description: 'What is Crash even?',
        b: 'Death Tornado Spin',
        sideb: 'Hog Wild',
        upb: 'Bouncing Crates',
        downb: 'Wumpa Bazooka',
        fsimg:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fcrashban%2Fimages%2F5%2F53%2FCrash_Bandicoot_Aku_Aku_Invincibility.png%2Frevision%2Flatest%3Fcb%3D20170114032413&f=1&nofb=1',
        fs: 'Invincible Aku Aku'  
      }, {
        name: 'Hello Kitty',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0035%2F3782%2F9955%2Fproducts%2FHello-Kitty-Decal_1200x1200.jpg%3Fv%3D1541788651&f=1&nofb=1',
        description: 'Just a friendy kitty',
        b: 'Scare Little Kids',
        sideb: 'Cuty Kitty',
        upb: 'Choking Hairballs',
        downb: 'Kitty Scratch',
        fsimg:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthumbs.dreamstime.com%2Fx%2Flittle-girl-military-uniform-26395520.jpg&f=1&nofb=1',
        fs: 'Little Girl Army'  
      }, {
        name: 'Spyro',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fprofile-database%2Fimages%2Fc%2Fc4%2FSpyro_Transparent.png%2Frevision%2Flatest%3Fcb%3D20180826181919&f=1&nofb=1',
        description: 'Spyro is a cute energetic young male purple dragon. He is known for his ability to defeat enemies by breathing fire and charging at them, and his ability to glide to otherwise unreachable areas in the game world. Spyro is often accompanied by his best friend Sparx, who is a dragonfly.',
        b: 'Flame Breath',
        sideb: 'Horn Charge',
        upb: 'Glide',
        downb: 'Headbash',
        fsimg:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.everyeye.it%2Fimg-notizie%2Fspyro-reignited-trilogy-teaser-trailer-mostra-rinnovato-dragon-shores-v4-351331.jpg&f=1&nofb=1',
        fs: 'Dragon Shores Coaster' 
      }
    ]
    // delete all 
    Smash.deleteMany({})
    .then((data) => {
        // seed the starter data
        Smash.create(seed)
        .then((data) => {
            // send created data back as JSON
            res.json(data)
        })
    })
})


// Index route 
app.get("/smash", (req, res) => {
    Smash.find({})
    .then((fighters) => {
        res.render("index.liquid", {fighters})
    })
    .catch((error) => {
        res.json({error})
    })
})

// New route
app.get("/smash/new", (req, res) => {
    res.render("new.liquid")
})

// Create route
app.post("/smash", (req, res) => {
    Smash.create(req.body)
    .then((fighter) => {
        res.redirect("/smash")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Edit Route
app.get("/smash/:id/edit", (req, res) => {
    const id = req.params.id
    Smash.findById(id)
    .then((fighter) => {
        res.render("edit.liquid", {fighter})
    })
    .catch((error) => {
        res.json({error})
    })
})

// Update Route
app.put("/smash/:id", (req, res) => {
    const id = req.params.id
    Smash.findByIdAndUpdate(id, req.body, {new: true})
    .then((fighter) => {
        res.render("show.liquid", {fighter})
    })
    .catch((error) => {
        res.json({error})
    })
})

// Destroy route
app.delete("/smash/:id", (req, res) => {
    const id = req.params.id
    Smash.findByIdAndRemove(id)
    .then((fighter) => {
        res.redirect("/smash")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Show route 
app.get("/smash/:id", (req, res) => {
    const id = req.params.id
    Smash.findById(id)
    .then((fighter) => {
        res.render("show.liquid", {fighter})
    })
    .catch((error) => {
        res.json({error})
    })
})

////////////////////////////////////////

// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))