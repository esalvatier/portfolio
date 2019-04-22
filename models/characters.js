const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {type: String, required: true},
    health: {type: Number, required: true},
    attack: {type: Number, required: true},
    baseAtk: {type: Number, required: true},
    portrait: {type: String, required: true}
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;