const { pool } = require('../../../connection');

// Function to insert a comment into the database
const postComment = async (_, { scriptid, userid, text_content, text_ref }) => {
    const client = await pool.connect();
    const query = "INSERT INTO comments (scriptid, userid, text_content, time_saved, text_ref) VALUES ($1, $2, $3, NOW() AT TIME ZONE 'CST6CDT', $4)";
    const values = [scriptid, userid, text_content, text_ref];
    const result = await client.query(query, values);
    client.release();
    return true;
}

// Function to delete a comment from the database
const deleteComment = async (_, { commentid }) => {
    const client = await pool.connect();
    const query = "DELETE FROM comments WHERE commentid = $1";
    const values = [commentid];
    const result = await client.query(query, values);
    client.release();
    return true;
}

// Export the functions for external use
module.exports = {
    postComment,
    deleteComment
};