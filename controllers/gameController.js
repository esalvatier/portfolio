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

    newEnv: function(req, res) {
        const {name, img, type, connections} = req.body;

        newEnviro = {
            name: name,
            imgSrc: img,
            type: type,
            validConnects: connections
        }

        db.Environment
        .create(newEnviro)
        .then(dbRes => {
            res.json(dbRes)
        })
    },

    getEnv: function(req, res) {
        const type = req.body.type
        const connect = (type === "any" ? "t" : type)
        db.Environment
        .countDocuments().then(function (count, err) {
            let skip = Math.floor(Math.random() * (count - 1));

            db.Environment
            .find({validConnects: {$regex: connect}}, {}, {limit: 1, skip: skip})
            .then(dbRes => {
                res.json(dbRes)})
        })
    },


    getEns: function(req, res) {
        const num = Math.floor(Math.random() * (8)) + 1;
        let enemies = new Array(num).fill();
            db.Enemy
            .countDocuments().then(function (count, err) {
                db.Enemy.find()
                .then( dbRes => {
                    for (let i = 0; i < num; i++) {
                        const skip = Math.floor(Math.random() * count);
                        enemies[i] = dbRes[skip];
                    }
                    res.json(enemies);
                })
            })
    }
}