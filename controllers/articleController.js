const db = require("../models/article");


module.exports = {
    findAll: function(req, res) {
      db.article
        .find({})
        .sort("asc")
        .then(function(dbModel){
          console.log("dbModel:" + dbModel);
          res.json(dbModel);
          
        })
        .catch(err => {
          res.status(422).json(err)
          console.log("database error :" + err);
        });
    },
    findById: function(req, res) {
      db.Article
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Article
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  