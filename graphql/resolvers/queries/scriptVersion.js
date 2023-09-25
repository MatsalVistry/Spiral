const { pool } = require('../../../connection');

const getScriptVersions = async (_, { scriptid }) => {
    const client = await pool.connect();
    const query = 'SELECT * FROM version_history WHERE scriptid = $1';
    const values = [scriptid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

module.exports = {
    getScriptVersions
};