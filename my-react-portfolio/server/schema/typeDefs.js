const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    title: String
    url: String
    role: String
    framework: String
    description: String
    imagepath: String
  }
  type Query {
    findProjects: [Project]
    findProject(id: ID!): Project
  }

  type Mutation {
    createProject(title: String, url: String, role: String, framework: String, description: String, imagepath: String): Project
    updateProject(id: ID, title: String, url: String, role: String, framework: String, description: String, imagepath: String): Project
    deleteProject(id: ID!): Project
  }
`;

module.exports = typeDefs;