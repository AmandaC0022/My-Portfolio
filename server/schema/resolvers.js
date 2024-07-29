const { Project } = require('../models'); 

const resolvers = {
    Query: {
        getProjects: async (parent, args) => {
            return await Project.find({}); 
        },
        getProject: async (parent, args) => {
            return await Project.findById(args.id); 
        }
    },
    Mutation: {
        createProject: async (parent, args) => {
            return await Project.create(args); 
        }, 
        deleteProject: async (parent, args ) => {
            const { id } = args; 
            const deletedProject = await Project.findByIdAndDelete(id); 
            if (!deletedProject) {
                throw new Error(`Project with ID ${id} is not found.`); 
            }
            return deletedProject; 
        },
        updateProject: async (parent, args) => {
            const { id } = args; 
            const updatedProject = await Project.findByIdAndUpdate(id, args);
            if (!updatedProject) {
                throw new Error(`Project with ID ${id} is not found.`); 
            } 
            return updatedProject; 
        }
    }
}

module.exports = resolvers; 