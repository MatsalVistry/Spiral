const { gql } = require('apollo-server-express');

const scriptTypeDefs = gql`
  type Script {
    scriptid: ID!
    userid: ID!
    title: String!
    last_modified: String!
    owner_username: String
  }

  type Query {
    getAllUserScripts(userid: ID!): [Script]
    getAllSharedScripts(userid: ID!): [Script]
  }

  type Mutation {
    createScript(userid: ID!, title: String!): Script
    deleteScript(scriptid: ID!): Boolean
    updateScript(scriptid: ID!, title: String): Script
    addCollaborator(scriptid: ID!, email: String!): Boolean
    removeCollaborator(scriptid: ID!, email: ID!): Boolean
    saveRecording(scriptid: ID!, title: String!): Boolean
  }
`;

module.exports = scriptTypeDefs;
