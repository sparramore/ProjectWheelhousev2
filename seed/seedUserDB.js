const mongoose = require("mongoose");
const db = require("../models/user/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/User"
);


/*
  Skill: {type: String, required:true},
  SkillDescription: { type: String, required: false},
  AreaOfKnowledge: {type: String },
  Scrapers:{type: String, required: true}
*/

const UserSeed = [
{
    UserName: "Steve@gmail.com",
    Password: "pass"
},
{
    UserName: "sadasd",
    Password: "general purpose OOP language"
},
{
    UserName: "ad++",
    Password: "general purpose OOP language"
},
{
    UserName: "adadad++",
    Password: "general purpose OOP language"
},
{
    UserName: "adadaadada++",
    Password: "general purpose OOP language"
},
{
    UserName: "cadadadadada",
    Password: "general purpose OOP language"
},
{
    UserName: "cadadadadad++",
    Password: "general purpose OOP language"
},
]


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error("ERROR: " + err);
    process.exit(1);
  });
