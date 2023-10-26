const { pool } = require('../../../connection');

const getAllUserScripts = async (_, { userid }) => {
    const client = await pool.connect();
    const query = "SELECT scriptid, userid, title, TO_CHAR(last_modified, 'YYYY-MM-DD hh:MI AM') as last_modified FROM scripts WHERE userid = $1";
    const values = [userid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
};

const getAllSharedScripts = async (_, { userid }) => {
    const client = await pool.connect();
    const query = "SELECT s.scriptid, s.userid, s.title, TO_CHAR(s.last_modified, 'YYYY-MM-DD hh:MI AM') as last_modified, u.username as owner_username FROM scripts as s INNER JOIN users as u ON s.userid=u.userid WHERE s.scriptid IN (SELECT scriptid FROM collaborators WHERE userid = $1)";
    const values = [userid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

const getAllScriptCollaborators = async (_, { scriptid }) => {
    const client = await pool.connect();
    const query = "SELECT u.* FROM users as u INNER JOIN collaborators as c ON u.userid=c.userid WHERE c.scriptid = $1";
    const values = [scriptid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

module.exports = {
    getAllUserScripts,
    getAllSharedScripts,
    getAllScriptCollaborators
};