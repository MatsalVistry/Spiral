const { gql } = require('apollo-server-express');

const commentTypeDefs = gql`
  type Comment {
    commentid: ID!
    scriptid: ID!
    userid: ID!
    time_saved: String!
    text_content: String!
    username: String
    text_ref: String!
  }

  type Query {
    getAllScriptComments(scriptid: ID!): [Comment]
  }

  type Mutation {
    postComment(scriptid: ID!, userid: ID!, text_content: String!, text_ref: String!): Boolean
    deleteComment(commentid: ID!): Boolean
  }
`;

module.exports = commentTypeDefs;
