const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const environmentSchema = new Schema({
    name: {type: String, required: true},
    imgSrc: {type: String, required: true},
    type: {type: String, required: true},
    validConnects: {type: String, required: true}
});

const Environment = mongoose.model("Environment", environmentSchema);

module.exports = Environment;