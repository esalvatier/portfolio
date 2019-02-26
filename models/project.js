const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  imageLink: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
