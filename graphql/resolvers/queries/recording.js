const { pool } = require('../../../connection');

const getScriptRecordings = async(_, { userid, title }) => {
    const client = await pool.connect();
    const query = "SELECT r.recordingid, s.scriptid, TO_CHAR(r.time_saved, 'YYYY-MM-DD hh:MI AM') as time_saved, r.title FROM recordings as r INNER JOIN scripts as s ON s.scriptid=r.scriptid WHERE s.userid = $1 AND s.title = $2";
    const values = [userid, title];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

const getAllUserRecordings = async(_, { userid }) => {
    const client = await pool.connect();
    const query = "SELECT r.recordingid, s.scriptid, r.time_saved, r.title FROM recordings as r INNER JOIN scripts as s ON s.scriptid=r.scriptid WHERE s.userid = $1";
    const values = [userid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

module.exports = {
    getScriptRecordings,
    getAllUserRecordings
};