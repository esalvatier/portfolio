const db = require("../models");

function makeID() {
    let id = Math.random().toString(36).replace('0.', '');
    db.Character
    .findOne({id: id})
    .then(dbRes => {
        if (!dbRes) {
            return id
        } else {
            makeID()
        }
    })
 }

module.exports = {
    newChar: function(req, res) {
        const {name, health, attack, portrait} = req.body;
        let newId = makeID();

        const userChar = {
            name: name,
            health: health,
            id: newId,
            attack: attack,
            baseAtk: attack,
            portrait: portrait
        }

        db.Character
        .create(userChar)
        .then(dbRes => {
            res.json(dbRes);
        })
    },

    getChar: function(req, res) {

    }
}