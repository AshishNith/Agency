const Project = require("../models/project.model")

exports.getProjects = async (req, res)  => {
    try {
        const projects = await Project.find().lean().sort({ createdAt: -1 });
        const transformedProjects = projects.map(project => ({
            ...project,
            id: project._id
        }));
        res.json(transformedProjects);
    }
    catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({"error": err.message});
    }
}

exports.createProject = async (req, res) => {
  try {
    console.log("Received project data:", req.body);
    const projectData = req.body;
    
    // Validate required fields
    if (!projectData.title || !projectData.description || !projectData.category || !projectData.image) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newProject = new Project(projectData);
    const savedProject = await newProject.save();
    console.log("Project created successfully:", savedProject);
    res.status(201).json(savedProject);
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