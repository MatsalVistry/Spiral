const userQueries = require('./queries/user');
const scriptQueries = require('./queries/script');
const userMutations = require('./mutations/user');
const scriptMutations = require('./mutations/script');

const rootResolver = {
  Query: {
    getAllUsers: userQueries.getAllUsers,
    login: userQueries.login,
    getAllUserScripts: scriptQueries.getAllUserScripts,
  },
  Mutation: {
    createUser: userMutations.createUser,
    deleteUser: userMutations.deleteUser,
    createScript: scriptMutations.createScript,
    deleteScript: scriptMutations.deleteScript,
    updateScriptTitle: scriptMutations.updateScriptTitle,
    addCollaborator: scriptMutations.addCollaborator,
    removeCollaborator: scriptMutations.removeCollaborator,
  }
};

module.exports = rootResolver;