const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enemySchema = new Schema({
    type: {type: String, required: true},
    baseHealth: {type: Number, required: true},
    baseAtk: {type: Number, required: true},
    dead: {type: Boolean, required: true, default: false},
    portrait: {type: String, required: true}
});

const Enemy = mongoose.model("Enemy", enemySchema);

module.exports = Enemy;