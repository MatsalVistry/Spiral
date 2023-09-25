const { gql } = require('apollo-server-express');
const rootResolver = require('./resolvers/root');
const rootTypeDefs = require('./typedefs/root');

module.exports = {
  typeDefs: rootTypeDefs,
  resolvers: rootResolver
};