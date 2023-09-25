const { pool } = require('../../../connection');

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

const login = async (_, { email, password }) => {
  try {
    const client = await pool.connect();
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];
    const result = await client.query(query, values);
    client.release();
    if (result.rows.length > 0) {
      return {
        user: result.rows[0],
        responseCode: 200,
      };
    }
    return {
      error: 'Invalid credentials',
      responseCode: 401,
    };
  } catch (error) {
    throw new Error(`Error finding user: ${error}`);
  }
};

module.exports = {
  getAllUsers,
  login,
};