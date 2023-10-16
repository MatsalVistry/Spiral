const userQueries = require('./queries/user');
const scriptQueries = require('./queries/script');
const scriptVersionQueries = require('./queries/scriptVersion');
const userMutations = require('./mutations/user');
const scriptMutations = require('./mutations/script');
const scriptVersionMutations = require('./mutations/scriptVersion');

const rootResolver = {
  Query: {
    getAllUsers: userQueries.getAllUsers,
    login: userQueries.login,
    getAllUserScripts: scriptQueries.getAllUserScripts,
    getAllSharedScripts: scriptQueries.getAllSharedScripts,
    getScriptVersions: scriptVersionQueries.getScriptVersions,
  },
  Mutation: {
    createUser: userMutations.createUser,
    deleteUser: userMutations.deleteUser,
    createScript: scriptMutations.createScript,
    deleteScript: scriptMutations.deleteScript,
    updateScript: scriptMutations.updateScript,
    addCollaborator: scriptMutations.addCollaborator,
    removeCollaborator: scriptMutations.removeCollaborator,
    createScriptVersion: scriptVersionMutations.createScriptVersion,
  }
};

module.exports = rootResolver;