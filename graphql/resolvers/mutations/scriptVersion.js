const { pool } = require('../../../connection');

// Function to create a new script version in the version history
const createScriptVersion = async (_, { scriptid }) => {
    const client = await pool.connect();
    const query = "INSERT INTO version_history (scriptid, time_saved) VALUES ($1, NOW() AT TIME ZONE 'CST6CDT') RETURNING *";
    const values = [scriptid];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
}

module.exports = {
    createScriptVersion
};