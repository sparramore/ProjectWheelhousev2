const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  LinkName: { type: String, required: true },
  LinkUrl: { type: String, required: true },
  HeuristicScore: {type: Number, required: true},
  Read: {type: Boolean, required: true}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
