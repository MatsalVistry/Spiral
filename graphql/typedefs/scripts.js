const { gql } = require('apollo-server-express');

const scriptTypeDefs = gql`
  type Script {
    scriptid: ID!
    userid: ID!
    title: String!
    s3link: String!
  }

  type Query {
    getAllUserScripts(userid: ID!): [Script]
  }

  type Mutation {
    createScript(userid: ID!, title: String!, s3link: String!): Script
    deleteScript(scriptid: ID!): Boolean
    updateScriptTitle(scriptid: ID!, title: String!): Script
    addCollaborator(scriptid: ID!, email: String!): Boolean
    removeCollaborator(scriptid: ID!, email: ID!): Boolean
  }
`;

module.exports = scriptTypeDefs;
