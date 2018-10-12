const mongoose = require("mongoose");
const db = require("../models/knowledge/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/KnowledgeList"
);


/*
  Skill: {type: String, required:true},
  SkillDescription: { type: String, required: false},
  AreaOfKnowledge: {type: String },
  Scrapers:{type: String, required: true}
*/

const KnowledgeSeed = [
  {
    Skill: "c++",
    SkillDescription: "general purpose OOP language",
    ScraperList: ["geekforgeek"]
  },
  {
    Skill: "Java",
    SkillDescription: "general purpose OOP language",
    ScraperList: ["geekforgeek"]
  },
  {
    Skill: "Javascript",
    SkillDescription: "High level interpreted language",
    ScraperList: ["geekforgeek"]
  },
  {
    Skill: "c#",
    SkillDescription: "general purpose multi-paradigm language",
    ScraperList: ["geekforgeek"]
  },
  {
    Skill: "PHP",
    SkillDescription: "server-side scripting language",
    ScraperList: ["geekforgeek"]
  },
  {
    Skill: "Python",
    SkillDescription: "interpreted high-level general purpose programming language",
    ScraperList: ["geekforgeek"]
  },
  {
    Skill: "c",
    SkillDescription: "general-purpose, imperative computer programming language",
    ScraperList: ["geekforgeek"]
  }, 
  {
    Skill: "SQL",
    SkillDescription: "domain-specific language used in programming and designed for managing data",
    ScraperList: ["geekforgeek"]
  }
]

db.Knowledge
  .remove({})
  .then(() => db.Knowledge.collection.insertMany(KnowledgeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
