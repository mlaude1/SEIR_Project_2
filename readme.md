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


## List of Technologies
- Express
- LiquidJS
- Mongoose
- CRUD 