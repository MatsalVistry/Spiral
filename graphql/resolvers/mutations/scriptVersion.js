const { pool } = require('../../../connection');

const createScriptVersion = async (_, { scriptid, title }) => {
    const client = await pool.connect();
    const query = 'INSERT INTO version_history (scriptid, title, time_saved) VALUES ($1, $2, NOW()) RETURNING *';
    const values = [scriptid, title];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
}

module.exports = {
    createScriptVersion
};