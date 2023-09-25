const { gql } = require('apollo-server-express');
const rootResolver = require('./resolvers/root');

// Define your GraphQL schema
const typeDefs = gql`
  type User {
    userid: ID!
    username: String!
    email: String!
    password: String!
  }

  type Script {
    scriptid: ID!
    userid: ID!
    s3link: String!
  }

  type Query {
    getAllUsers: [User]
    verifyCredentials(email: String!, password: String!): Boolean
    getAllUserScripts(userid: ID!): [Script]
  }
`;

module.exports = {
  typeDefs,
  resolvers: rootResolver
};