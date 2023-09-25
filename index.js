async function startApolloServer() {
  const { ApolloServer } = require('@apollo/server');
  const { startStandaloneServer } = require('@apollo/server/standalone');
  const { typeDefs, resolvers } = require('./graphql/schema');
  const { pool } = require('./connection');

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { pool }
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();
