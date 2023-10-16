const { gql } = require('apollo-server-express');

const scriptVersionsTypeDefs = gql`
    type ScriptVersion {
        versionid: ID!
        scriptid: ID!
        time_saved: String!
        title: String!
    }

    type Query {
        getScriptVersions(scriptid: ID!): [ScriptVersion]
    }

    type Mutation {
        createScriptVersion(scriptid: ID!, title: String!): ScriptVersion
    }
`;

module.exports = scriptVersionsTypeDefs;
