const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const { pool } = require('./connection');

// Load environment variables
const app = express();

// Create an Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pool } // Pass the PostgreSQL pool to the context
});

// Start the Apollo Server asynchronously
async function startApolloServer() {
    await server.start();
  
    // Apply the Apollo middleware to Express
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 4000;
  
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startApolloServer();