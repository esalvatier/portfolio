const db = require("../models");

module.exports = {
    newChar: function(req, res) {
        const {name, health, attack, portrait} = req.body;

        const userChar = {
            name: name,
            health: health,
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
        const {id} = req.body;
        db.Character
        .findById(id)
        .then(dbRes => {
            res.json(dbRes)
        })
    },

    getAllChars: function(req, res) {
        db.Character
        .find()
        .then(dbRes => {
            res.json(dbRes)
        })
    },

    updateChar: function(req, res) {
        const {id, health, attack} = req.body;
        db.Character
        .findByIdAndUpdate(id, {health: health, attack: attack}, {new: true})
        .then(dbRes => {
            res.json(dbRes)
        })
    },

    newEn: function(req, res) {
        const {type, health, attack, portrait} = req.body;

        newEnemy = {
            type: type,
            baseHealth: health,
            baseAtk: attack,
            dead: false,
            portrait: portrait
        }
        db.Enemy
        .create(newEnemy)
        .then(dbRes => {
            res.json(dbRes)
        })
    },

    getEns: function(req, res) {
        const {max, min} = req.body;
        const num = Math.floor(Math.random() * (max - min + 1)) + min;

        let enemies = new Array(num).fill();

        db.Enemy
        .count().then(function (err, count) {
            const skip = Math.floor(Math.random() * count);
            db.Enemy.findOne()
            .skip(skip)
            .then( function(err, type) {
                for (let i = 0; i < num; i++) {
                    enemies[i] = type;
                }
                res.json(enemies);
            })
        })
    }
}