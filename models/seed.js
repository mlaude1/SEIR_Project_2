/////////////////////////////
//Import Dependencies
/////////////////////////////
const mongoose = require("./connection")
const Smash = require("./smash")

///////////////////////////////
// Seed Code
///////////////////////////////

// save the connection in it a variable
const db = mongoose.connection

// make sure code doesn't run till connection is open
db.on("open", () => {
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
        description: 'Hello Kitty, also known by her full name, Kitty White, is a fictional character portrayed as a female white Japanese Bobtail Cat with a red bow worn on her left ear and often wears blue overalls with a yellow shirt on top.',
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
      },
// =================================== //
    {
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