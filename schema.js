const { gql } = require('apollo-server-express');
const { pool } = require('./connection');

// Define your GraphQL schema
const typeDefs = gql`
  type User {
    userid: ID
    username: String
    email: String
    password: String
  }

  type Query {
    getAllUsers: [User]
    verifyCredentials(email: String!, password: String!): Boolean
  }
`;

const resolvers = {
    Query: {
      getAllUsers: async () => {
        try {
          const client = await pool.connect();
          const result = await client.query('SELECT * FROM users;');
          console.log(result.rows);
          client.release();
          return result.rows;
        } catch (error) {
          throw new Error(`Error fetching users: ${error}`);
        }
      },
      verifyCredentials: async (_, { email, password }) => {
        try {
          const client = await pool.connect();
          const query = 'SELECT COUNT(*) FROM users WHERE email = $1 AND password = $2';
          const values = [email, password];
          const result = await client.query(query, values);
          client.release();
          return result.rows[0].count > 0;
        } catch (error) {
          throw new Error(`Error finding user: ${error}`);
        }
      }
    }
  };

module.exports = {
  typeDefs,
  resolvers
};