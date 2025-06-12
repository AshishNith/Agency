const Project = require("../models/project.model")

exports.getProjects = async (req, res)  => {
    try {
        const projects = await Project.find();
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({"error": err.message});
    }
}

exports.createProject = async (req, res) => {
  try {
    const projectData = req.body;
    const newProject = new Project(projectData);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(400).json({ error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(
      id, 
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};