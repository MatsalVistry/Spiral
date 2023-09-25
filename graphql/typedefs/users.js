const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    userid: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getAllUsers: [User]
    verifyCredentials(email: String!, password: String!): Boolean
  }
`;

module.exports = userTypeDefs;
