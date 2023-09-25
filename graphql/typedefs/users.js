const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    userid: ID!
    username: String!
    email: String!
    password: String!
  }

  type LoginResponse {
    user: User
    error: String
    responseCode: Int
  }

  type Query {
    getAllUsers: [User]
    login(email: String!, password: String!): LoginResponse
  }
`;

module.exports = userTypeDefs;
