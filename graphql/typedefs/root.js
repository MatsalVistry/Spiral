const { mergeTypeDefs } = require('@graphql-tools/merge');
const userTypeDefs = require('./users');
const scriptTypeDefs = require('./scripts');
const scriptVersionsTypeDefs = require('./scriptVersions');
const recordingTypeDefs = require('./recordings');

const rootTypeDefs = mergeTypeDefs([userTypeDefs, scriptTypeDefs, scriptVersionsTypeDefs, recordingTypeDefs]);
module.exports = rootTypeDefs;