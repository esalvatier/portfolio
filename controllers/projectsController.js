const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Project
        .find({})
        .then(dbModels => res.json(dbModels))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {

        console.log(req.body);
        db.Project
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
  