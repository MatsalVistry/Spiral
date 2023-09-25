const { pool } = require('../../../connection');

const createUser = async (_, { username, email, password }) => {
    const client = await pool.connect();
    const query = 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *';
    const values = [username, email, password];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
};

const deleteUser = async (_, { userid }) => {
    const client = await pool.connect();
    const query = 'DELETE FROM users WHERE userid = $1';
    const values = [userid];
    const result = await client.query(query, values);

    if (result.rowCount === 0)
        throw new Error(`Error deleting user.`);
    client.release();
    return true;
}

module.exports = {
    createUser,
    deleteUser
};