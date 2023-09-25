const { gql } = require('apollo-server-express');

const scriptVersionsTypeDefs = gql`
    type ScriptVersion {
        versionid: ID!
        scriptid: ID!
        time_saved: String!
        s3link: String!
    }

    type Query {
        getScriptVersions(scriptid: ID!): [ScriptVersion]
    }

    type Mutation {
        createScriptVersion(scriptid: ID!, s3link: String!): ScriptVersion
    }
`;

module.exports = scriptVersionsTypeDefs;
