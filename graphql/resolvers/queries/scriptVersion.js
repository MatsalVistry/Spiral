const { pool } = require('../../../connection');

const getScriptVersions = async (_, { scriptid }) => {
    const client = await pool.connect();
    const query = "SELECT versionid, scriptid, TO_CHAR(time_saved, 'YYYY-MM-DD hh:MI AM') as time_saved FROM version_history WHERE scriptid = $1 ORDER BY time_saved DESC";
    const values = [scriptid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

module.exports = {
    getScriptVersions
};