const project = require("../models/project");

async function handlegetallprojects(req, res) {
  try {
    const allprojects = await project.find({});
    return res.json(allprojects);
  } catch (error) {
    console.error("Error fetching all projects:", error); // Added error logging
    return res.status(500).json({ error: "Error fetching all projects" });
  }
}

async function handlegetprojectsbyid(req, res) {
  try {
    const user = await project.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error("Error fetching project by ID:", error); // Added error logging
    return res.status(500).json({ error: "Error fetching project by ID" });
  }
}

async function updateprojectbyid(req, res) {
  try {
    const updatedProject = await project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.json({ msg: "Success", project: updatedProject });
  } catch (error) {
    console.error("Error updating project:", error); // Added error logging
    return res.status(500).json({ error: "Error updating project" });
  }
}

async function deleteprojectbyid(req, res) {
  try {
    const deletedProject = await project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.json({ msg: "Success", project: deletedProject });
  } catch (error) {
    console.error("Error deleting project:", error); // Added error logging
    return res.status(500).json({ error: "Error deleting project" });
  }
}

async function addproject(req, res) {
  try {
    const { title, img, desc, link } = req.body;
    const newProject = await project.create({ title, img, desc, link });
    return res.status(201).json({ msg: "Success", project: newProject });
  } catch (error) {
    console.error("Error creating project:", error); // Added error logging
    return res.status(500).json({ error: "Error creating project" });
  }
}

module.exports = {
  handlegetallprojects,
  handlegetprojectsbyid,
  updateprojectbyid,
  deleteprojectbyid,
  addproject,
};
