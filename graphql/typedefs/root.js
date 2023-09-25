const { mergeTypeDefs } = require('@graphql-tools/merge');
const userTypeDefs = require('./users');
const scriptTypeDefs = require('./scripts');

const rootTypeDefs = mergeTypeDefs([userTypeDefs, scriptTypeDefs]);
module.exports = rootTypeDefs;