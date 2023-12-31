const { gql } = require('apollo-server-express');

// Define the GraphQL schema for recordings
const recordingTypeDefs = gql`
  type Recording {
    recordingid: ID!
    scriptid: ID!
    time_saved: String!
    title: String!
  }

  type Query {
    getScriptRecordings(userid: ID!, title: String!): [Recording]
    getAllUserRecordings(userid: ID!): [Recording]
  }

  type Mutation {
    saveRecording(scriptid: ID!, title: String!): Boolean
    deleteRecording(scriptid: ID!, title: String!): Boolean
  }
`;

module.exports = recordingTypeDefs;
