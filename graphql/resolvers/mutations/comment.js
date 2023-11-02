const { pool } = require('../../../connection');

const postComment = async (_, { scriptid, userid, text_content }) => {
    const client = await pool.connect();
    const query = "INSERT INTO comments (scriptid, userid, text_content, time_saved) VALUES ($1, $2, $3, NOW() AT TIME ZONE 'CST6CDT')";
    const values = [scriptid, userid, text_content];
    const result = await client.query(query, values);
    client.release();
    return true;
}

const deleteComment = async (_, { commentid }) => {
    const client = await pool.connect();
    const query = "DELETE FROM comments WHERE commentid = $1";
    const values = [commentid];
    const result = await client.query(query, values);
    client.release();
    return true;
}

module.exports = {
    postComment,
    deleteComment
};