const { Schema, model } = require('mongoose'); 

//defines the structure of our Document
const projectSchema = new Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    url: {
        type: String, 
        required: true, 
    }, 
    role: {
        type: String, 
        required: true, 
    }, 
    framework: {
        type: String, 
        required: true, 
    }, 
    description: {
        type: String, 
        required: true, 
    }, 
    imagepath: {
        type: String, 
        required: true, 
    }
})

//creates a model and then allows us to manipulate the schema 
const Project = model('Project', projectSchema); 

module.exports = Project; 