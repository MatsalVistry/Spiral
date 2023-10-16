const { pool } = require('../../../connection');

const getAllUserScripts = async (_, { userid }) => {
    const client = await pool.connect();
    const query = "SELECT scriptid, userid, title, s3link, TO_CHAR(last_modified, 'YYYY-MM-DD hh:MI AM') as last_modified FROM scripts WHERE userid = $1";
    const values = [userid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
};

const getAllSharedScripts = async (_, { userid }) => {
    const client = await pool.connect();
    const query = 'SELECT * FROM scripts WHERE scriptid IN (SELECT scriptid FROM collaborators WHERE userid = $1)';
    const values = [userid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

module.exports = {
    getAllUserScripts,
    getAllSharedScripts
};