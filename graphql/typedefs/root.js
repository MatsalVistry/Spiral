const { mergeTypeDefs } = require('@graphql-tools/merge');


// Import individual type definitions for users, scripts, script versions, recordings, and comments
const userTypeDefs = require('./users');
const scriptTypeDefs = require('./scripts');
const scriptVersionsTypeDefs = require('./scriptVersions');
const recordingTypeDefs = require('./recordings');
const commentTypeDefs = require('./comments');

// Merge all type definitions into a single root type definition
const rootTypeDefs = mergeTypeDefs([userTypeDefs, scriptTypeDefs, scriptVersionsTypeDefs, recordingTypeDefs, commentTypeDefs]);
module.exports = rootTypeDefs;