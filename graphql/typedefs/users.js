const { gql } = require('apollo-server-express');

// Define the GraphQL schema for users
const userTypeDefs = gql`
  type User {
    userid: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getAllUsers: [User]
    login(email: String!, password: String!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    deleteUser(userid: ID!): Boolean
  }
`;

module.exports = userTypeDefs;
