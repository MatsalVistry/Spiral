const { mergeTypeDefs } = require('@graphql-tools/merge');
const userTypeDefs = require('./users');
const scriptTypeDefs = require('./scripts');
const scriptVersionsTypeDefs = require('./scriptVersions');

const rootTypeDefs = mergeTypeDefs([userTypeDefs, scriptTypeDefs, scriptVersionsTypeDefs]);
module.exports = rootTypeDefs;