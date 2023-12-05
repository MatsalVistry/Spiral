const { pool } = require('../../../connection');

// Function to retrieve all users from the database
const getAllUsers = async () => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users;');
    client.release();
    return result.rows;
};

// Function to authenticate a user based on email and password
const login = async (_, { email, password }) => {
    const client = await pool.connect();
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];
    const result = await client.query(query, values);
    client.release();
    if (result.rows.length === 0)
        throw new Error(`Invalid credentials.`);
    return result.rows[0];
};

module.exports = {
    getAllUsers,
    login,
};