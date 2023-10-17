const { gql } = require('apollo-server-express');

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
  }
`;

module.exports = recordingTypeDefs;
