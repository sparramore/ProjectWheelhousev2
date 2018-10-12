var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KnowledgeSchema = new Schema({
  Skill: {type: String, required:true},
  SkillDescription: { type: String, required: false},
  AreaOfKnowledge: {type: String },
  Scrapers: [{
    type: String,
    required: true
}]
});

var Knowledge = mongoose.model("Knowledge", KnowledgeSchema);

module.exports = Knowledge;
