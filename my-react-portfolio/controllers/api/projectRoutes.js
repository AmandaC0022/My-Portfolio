const router = require('express').Router();
const { Project } = require('../../models');

//Get all projects 
router.get("/", async (req, res) => {
    try {
      const projectData = await Project.findAll();
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
}); 

router.get("/:id", async (req, res) => {
    try {
      const projectData = await Project.findOne({
        where: { id: req.body.id }
      });
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Create new project 
router.post("/", async (req, res) => {
try {
    const newProject = await Project.create({
        title: req.body.title,
        url: req.body.url, 
        role: req.body.role, 
        framework: req.body.framework, 
        description: req.body.description, 
        imagepath: req.body.imagepath, 
        sortorder: req.body.sortorder
        });
    res.status(200).json(newProject);
} catch (err) {
    res.status(500).json(err);
}
});

//Delete a project
router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  module.exports = router; 