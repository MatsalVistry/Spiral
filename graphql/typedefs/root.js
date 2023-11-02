const { mergeTypeDefs } = require('@graphql-tools/merge');
const userTypeDefs = require('./users');
const scriptTypeDefs = require('./scripts');
const scriptVersionsTypeDefs = require('./scriptVersions');
const recordingTypeDefs = require('./recordings');
const commentTypeDefs = require('./comments');

const rootTypeDefs = mergeTypeDefs([userTypeDefs, scriptTypeDefs, scriptVersionsTypeDefs, recordingTypeDefs, commentTypeDefs]);
module.exports = rootTypeDefs;