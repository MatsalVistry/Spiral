const { pool } = require('../../connection');

const getAllUsers = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users;');
    client.release();
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  }
};

const verifyCredentials = async (_, { email, password }) => {
  try {
    const client = await pool.connect();
    const query = 'SELECT COUNT(*) FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0].count > 0;
  } catch (error) {
    throw new Error(`Error finding user: ${error}`);
  }
};

module.exports = {
  getAllUsers,
  verifyCredentials,
};