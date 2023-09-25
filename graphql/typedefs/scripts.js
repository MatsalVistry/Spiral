const { gql } = require('apollo-server-express');

const scriptTypeDefs = gql`
  type Script {
    scriptid: ID!
    userid: ID!
    s3link: String!
  }

  type Query {
    getAllUserScripts(userid: ID!): [Script]
  }
`;

module.exports = scriptTypeDefs;
