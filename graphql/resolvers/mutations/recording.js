const { pool } = require('../../../connection');

const saveRecording = async(_, { scriptid, title }) => {
    const client = await pool.connect();
    const query = "INSERT INTO recordings(scriptid, time_saved, title) VALUES ($1, NOW() AT TIME ZONE 'CST6CDT', $2) RETURNING *";
    const values = [scriptid, title];
    await client.query(query, values);
    client.release();
    return true;
}

module.exports = {
    saveRecording
};