const userResolvers = require('./queries/user');
const scriptResolvers = require('./queries/script');

const rootResolver = {
  Query: {
    getAllUsers: userResolvers.getAllUsers,
    verifyCredentials: userResolvers.verifyCredentials,
    getAllUserScripts: scriptResolvers.getAllUserScripts
  },
};

module.exports = rootResolver;