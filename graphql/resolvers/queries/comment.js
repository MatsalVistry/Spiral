const { pool } = require('../../../connection');

const getAllScriptComments = async(_, { scriptid }) => {
    const client = await pool.connect();
    const query = "SELECT c.*, u.username FROM comments as c INNER JOIN users as u ON c.userid=u.userid WHERE scriptid = $1 ORDER BY time_saved ASC";
    const values = [scriptid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
}

module.exports = {
    getAllScriptComments
};