const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/schema');
const { pool } = require('./connection');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pool }
});

async function startApolloServer() {
    await server.start();
  
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 4000;
  
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startApolloServer();