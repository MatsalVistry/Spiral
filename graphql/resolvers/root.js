const userQueries = require('./queries/user');
const scriptQueries = require('./queries/script');
const userMutations = require('./mutations/user');

const rootResolver = {
  Query: {
    getAllUsers: userQueries.getAllUsers,
    login: userQueries.login,
    getAllUserScripts: scriptQueries.getAllUserScripts
  },
  Mutation: {
    createUser: userMutations.createUser,
    deleteUser: userMutations.deleteUser
  }
};

module.exports = rootResolver;