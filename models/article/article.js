const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  LinkName: { type: String, required: true, unique: true, index: true},
  LinkUrl: { type: String, required: true },
  HeuristicScore: {type: Number, required: true},
  Language: { type: String}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
