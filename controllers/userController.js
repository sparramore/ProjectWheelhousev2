const db = require("../models/user/");
const MongoClient = require('mongodb').MongoClient;


module.exports = {
    findAll: function(req, res) {
      console.log("TEST!")

      console.log("REQ: " + req.query)
      
        db.User
        .find(req.query)
        .sort("asc")
        .then(function(dbModel){
          res.json(dbModel)
          console.log("MODEL: " + dbModel)
        })
        .catch(function(err){
          res.status(422).json(err)
          console.log("ERROR: " + err);
        });

    }//,
    // findById: function(req, res) {
    //   db.User
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // create: function(req, res) {
    //   db.User
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // update: function(req, res) {
    //   db.User
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //   db.User
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
  };
  