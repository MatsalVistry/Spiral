const { pool } = require('../../../connection');

const getAllUserScripts = async (_, { userid }) => {
    const client = await pool.connect();
    const query = 'SELECT * FROM scripts WHERE userid = $1';
    const values = [userid];
    const result = await client.query(query, values);
    client.release();
    return result.rows;
};

module.exports = {
    getAllUserScripts
};