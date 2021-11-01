# Project 2
#### By MATTHEW LAUDE

## Project Summary

I am building a Super Smash Bros. fighter wishlist. An index page displays a list of the fighters. Clicking on a fighter opens a show page that displays the fighter along with the fighter's special moveset and Final Smash. 

## Models

```
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
```

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /smash | get | get all fighters (index)|
| /smash/new | get | get a form for a new fighter (new) |
| /smash | post | push the new form's data (create) |
| /smash/:id/edit | get | get a form of the fighter's data (edit) | 
| /smash/:id | put | replace the fighter's data (update) |
| /smash/:id | delete | delete the fighter |(destroy) |
| /smash/:id | get | get a particular fighter (show)|

## User Stories

- The user can sign up and log in
- The user can view a list of all the fighters
- The user can add their own fighters to the list, including a name, description, image, and moveset
- The user can edit and delete fighters

## Challenges
- Styling the show route took a very long time. I get really particular with the positioning of everything, like having the description of the fighter on the left and their moveset on the right, the positioning of the moveset icons, having the right padding, finding a fixed img size, etc. There were so many things I kept wanting to tweak. The challenge was making flexbox work and knowing which elements to grab. But I felt like I learned a lot about specificity, so that's good. 

- Another big challenge and mistake I did was that I spent so much time on the CSS without doing the MVP first (setting up the authentication/authorization thing, setting up routes in a seperate file in Controllers, etc.) All the routes and connections were inside my ```server.js```. So when I needed to move things around, I was scared to death to do so because it could crash my app. I ended up duplicating my code and setting up another branch. 

- AUTHENTICATION BREAKTHROUGH - carefully manipulated my routes, so they would work. The login and signup pages were functional, but everything was still showing no matter who was logged in. But that’s because I had to add the ‘username’ property in the Schema, and I only found that out by studying the super_fruit objects in MongoDB. Once I added that property to the fighterSchema, it worked. I was proud of myself. 

## List of Technologies
- Express
- LiquidJS
- Mongoose
- CRUD 
