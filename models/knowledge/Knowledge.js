var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var KnowledgeSchema = new Schema({
  Skill: {type: String, required:true},
  SkillDescription: { type: String, required: false},
  AreaOfKnowledge: {type: String },
  Scrapers: [{
    type: String,
    required: true
}]
});

KnowledgeSchema.plugin(uniqueValidator);

var Knowledge = mongoose.model("knowledges", KnowledgeSchema);

module.exports = Knowledge;
