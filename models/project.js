const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  imageLink: { type: String },
  alt: { type: String}
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
