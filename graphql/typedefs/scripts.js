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
  }
`;

module.exports = scriptTypeDefs;
