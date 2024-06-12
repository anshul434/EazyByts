const mongoose = require("mongoose");

// Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, required: true },
});

// Model
const project = mongoose.model("Project", projectSchema);
module.exports = project;
