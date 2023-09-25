const { pool } = require('../../../connection');

const createUser = async (_, { username, email, password }) => {
  try {
    const client = await pool.connect();
    const query = 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *';
    const values = [username, email, password];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

const deleteUser = async (_, { userid }) => {
    try {
        const client = await pool.connect();
        const query = 'DELETE FROM users WHERE userid = $1';
        const values = [userid];
        await client.query(query, values);
        client.release();
        return true;
    } catch (error) {
        throw new Error(`Error deleting user: ${error}`);
    }
}

module.exports = {
  createUser,
  deleteUser
};