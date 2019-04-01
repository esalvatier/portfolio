const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    name: {type: String},
    reason: {type: String, required: true},
    content: {type: String, required: true}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
