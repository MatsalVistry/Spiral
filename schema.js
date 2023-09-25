const { gql } = require('apollo-server-express');

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!'
  }
};

module.exports = {
  typeDefs,
  resolvers
};