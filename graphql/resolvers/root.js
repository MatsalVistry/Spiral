const userResolvers = require('./queries/user');
const scriptResolvers = require('./queries/script');

const rootResolver = {
  Query: {
    getAllUsers: userResolvers.getAllUsers,
    login: userResolvers.login,
    getAllUserScripts: scriptResolvers.getAllUserScripts
  },
};

module.exports = rootResolver;