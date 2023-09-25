const { pool } = require('../../../connection');

const createScript = async (_, { userid, title, s3link }) => {
    const client = await pool.connect();
    const query = 'INSERT INTO scripts(userid, title, s3link) VALUES($1, $2, $3) RETURNING *';
    const values = [userid, title, s3link];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
}

const deleteScript = async (_, { scriptid }) => {
    const client = await pool.connect();
    const query = 'DELETE FROM scripts WHERE scriptid = $1';
    const values = [scriptid];
    const result = await client.query(query, values);

    if (result.rowCount === 0)
        throw new Error(`Error deleting script.`);
    client.release();
    return true;
}


module.exports = {
    createScript,
    deleteScript
};