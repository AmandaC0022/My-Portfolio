const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize HashTag model (table) by extending off Sequelize's Model class
class Project extends Model {};

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        framework: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        imagepath: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        sortorder: {
            type: DataTypes.INETGER,
            allowNull: false
        }, 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project;