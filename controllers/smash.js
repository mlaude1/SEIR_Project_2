////////////////////////
// Import Dependencies
////////////////////////
const express = require("express")
const Smash = require("../models/smash.js") // smash model

//////////////////
// create router
//////////////////
const router = express.Router()


////////////////////////
// Router Middleware
////////////////////////
router.use((req, res, next) => {
    // check if logged in
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
})


////////////////////////
// Smash Routes
////////////////////////

//seed route - seed our starter data
router.get("/seed", (req, res) => {
    // array of starter fighters
    const seed =
    [
      {
        name: 'Waluigi',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F25247b92-6844-4fef-8ed8-5055cc35bf58%2Fdbuztua-01c11142-f1bc-4322-a9b6-28de4044364a.png%2Fv1%2Ffill%2Fw_1001%2Ch_798%2Cstrp%2Fwaluigi_promo_art_recreation_render_by_nintega_dario_dbuztua-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzI1MjQ3YjkyLTY4NDQtNGZlZi04ZWQ4LTUwNTVjYzM1YmY1OFwvZGJ1enR1YS0wMWMxMTE0Mi1mMWJjLTQzMjItYTliNi0yOGRlNDA0NDM2NGEucG5nIiwid2lkdGgiOiI8PTEzNTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kJuxH-4aIoTPgWsJ0qNqJSkIIfvN1v7Svz1HuFX2wQ8&f=1&nofb=1',
        description: "Waluigi is defined by his purple attire, nasally Italian accent, long handlebar-esque mustache (and other bizarre physical features), rude and trickster personality, rivalry with Luigi, and tendency to cheat.",
        b: 'Liar Ball',
        bdet: "He'll punt a baseball into two - a real ball, which can be thrown, and a fake ball, a Whiskered Eggplant. Toxic to the touch.",
        sideb: 'Whirluigi',
        sidebdet: "Tennis racket in hands, he'll spin up a cyclone! While spinning, he can deflect projectiles.",
        upb: 'Twist Dunk',
        upbdet: "How does he swim in the air!? Well, it doesn't matter. Move around while swimming with the Control Stick.",
        downb: 'Drop Rocket',
        downbdet: "He's got his soccer duds on for a reason. He'll bounce slightly off this ball as it goes rocketing, bouncing off any walls and floors.",
        fsimg: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.wikia.nocookie.net%2F__cb20121106015922%2Fmario%2Fimages%2F1%2F1c%2FWaluigi_%26_Bob-ombs%2C_Mario_Party_9.png&f=1&nofb=1',
        fs: 'Bob-ombs away',
        fsdet: "Ah, the trusty Bob-omb launcher. While Waluigi fires volleys of Bob-ombs, tilt the Control Stick to control the angle. It'll be a little while before the destruction ceases."
      }, {
        name: 'Spyro',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fprofile-database%2Fimages%2Fc%2Fc4%2FSpyro_Transparent.png%2Frevision%2Flatest%3Fcb%3D20180826181919&f=1&nofb=1',
        description: 'Spyro is a cute energetic young male purple dragon. He is known for his ability to defeat enemies by breathing fire and charging at them, and his ability to glide to otherwise unreachable areas in the game world. Spyro is often accompanied by his best friend Sparx, who is a dragonfly.',
        b: 'Flame Breath',
        bdet: 'Unleash a quick burst of flame. Causes shields to glow orange and slow down the rate at which they shrink.',
        sideb: 'Horn Charge',
        sidebdet: 'Charge through light opponents. Causes heavy opponents to stagger back and has a meteor effect if they are budged past the ledge.',
        upb: 'Glide',
        upbdet: 'Uses wings to perform an ascending loop, and then glide forward at a gradual descent.',
        downb: 'Headbash',
        downbdet: 'Horn-dive on enemies. On the ground, he can lift opponents with his horns. Headbash is great for breaking shields.',
        fsimg:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.everyeye.it%2Fimg-notizie%2Fspyro-reignited-trilogy-teaser-trailer-mostra-rinnovato-dragon-shores-v4-351331.jpg&f=1&nofb=1',
        fs: 'Dragon Shores Coaster',
        fsdet: 'Spyro dashes forward to strike. If it hits, the opponent is trapped in a roller coaster with tracks that end in a crash, while Spyro sits back and relaxes in his sunglasses.'
      }, {
        name: 'Hello Kitty',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0035%2F3782%2F9955%2Fproducts%2FHello-Kitty-Decal_1200x1200.jpg%3Fv%3D1541788651&f=1&nofb=1',
        description: 'Hello Kitty, also known by her full name, Kitty White, is a fictional character portrayed as a female white Japanese Bobtail Cat with a red bow worn on her left ear and often wears blue overalls with a yellow shirt on top. ',
        b: 'Hairball',
        bdet: "Kitty starts to cough up a hairball. The hairball is a sticky projectile that can get on walls, opponents (poisonous), and the ground (becomes a slip trap that's also effective on Kitty). The longer you hold B, the more she coughs.",
        sideb: 'Kitty Cannon',
        sidebdet: "Kitty shoots from a white cannon that causes a small combustion upon the opponent they come in contact with.",
        upb: 'Red Balloons',
        upbdet: "Kitty straps on a pair of red balloons and floats up into the sky. Projectile attacks and sharp objects will manage to pop the balloons.",
        downb: 'Basket of Strawberries',
        downbdet: "Kitty gets out a woven basket filled with freshly picked strawberries. She can eat them to heal herself or throw them at opponents.",
        fsimg:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthumbs.dreamstime.com%2Fx%2Flittle-girl-military-uniform-26395520.jpg&f=1&nofb=1',
        fs: 'Little Girl Army',
        fsdet: "Kitty has the ability to summon her entire fanbase to do her bidding and overwhelm her opponents."
      }
    ]

    // delete all 
    Smash.deleteMany({}).then((data) => {
        // seed the starter data
        Smash.create(seed).then((data) => {
            // send created data back as JSON
            res.json(data)
            db.close()
        })
    })
})

// Index route
router.get("/", (req, res) => {
    Smash.find({username: req.session.username})
    .then((fighters) => {
        res.render("smash/index.liquid", {fighters})
    })
    .catch((error) => {
        res.json({error})
    })
})

// New route 
router.get("/new", (req, res) => {
    res.render("smash/new.liquid")
})

// Create route
router.post("/", (req, res) => {

    // add the username to req.body, to track user
    req.body.username = req.session.username

    Smash.create(req.body)
    .then((fighter) => {
        res.redirect("/smash")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Edit route
router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    Smash.findById(id)
    .then((fighter) => {
        res.render("smash/edit.liquid", { fighter })
    })
    .catch((error) => {
        res.json({error})
    })
})

// Update route
router.put("/:id", (req, res) => {
    const id = req.params.id

    Smash.findByIdAndUpdate(id, req.body, {new: true})
    .then((fighter) => {
        res.render("smash/show.liquid", {fighter})
    })
    .catch((error) => {
        res.json({error})
    })
})

// Destroy route
router.delete("/:id", (req, res) => {
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
router.get("/:id", (req, res) => {
    const id = req.params.id
    Smash.findById(id)
    .then((fighter) => {
        res.render("smash/show.liquid", {fighter})
    })
    .catch((error) => {
        res.json({error})
    })
})


/////////////////////////////
// export the router
/////////////////////////////
module.exports = router