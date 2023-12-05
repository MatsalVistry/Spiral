const { pool } = require('../../../connection');

// Function to save a recording to the database
const saveRecording = async(_, { scriptid, title }) => {
    const client = await pool.connect();
    const query = "INSERT INTO recordings(scriptid, time_saved, title) VALUES ($1, NOW() AT TIME ZONE 'CST6CDT', $2) RETURNING *";
    const values = [scriptid, title];
    await client.query(query, values);
    client.release();
    return true;
}

// Function to delete a recording from the database
const deleteRecording = async(_, { scriptid, title }) => {
    const client = await pool.connect();
    const query = "DELETE FROM recordings WHERE scriptid = $1 AND title = $2";
    const values = [scriptid, title];
    await client.query(query, values);
    client.release();
    return true;
}

// Export the functions for external use
module.exports = {
    saveRecording,
    deleteRecording
};