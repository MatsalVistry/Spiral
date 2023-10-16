const { pool } = require('../../../connection');

const createScript = async (_, { userid, title }) => {
    const client = await pool.connect();
    const query = 'INSERT INTO scripts(userid, title) VALUES($1, $2, $3) RETURNING *';
    const values = [userid, title];
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

const updateScript = async (_, { scriptid, title }) => {
    const client = await pool.connect();
    let query = "UPDATE scripts SET last_modified = NOW() AT TIME ZONE 'CST6CDT' WHERE scriptid = $1 RETURNING *";
    const values = [scriptid];
  
    if (title !== undefined) {
      query = "UPDATE scripts SET title = $1, last_modified = NOW() AT TIME ZONE 'CST6CDT' WHERE scriptid = $2 RETURNING *";
      values.unshift(title);
    }
  
    const result = await client.query(query, values);
  
    if (result.rowCount === 0)
      throw new Error(`Error updating script.`);
    client.release();
    return result.rows[0];
  };

const addCollaborator = async (_, { scriptid, email }) => {
    const client = await pool.connect();
    const query = 'SELECT userid FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    if (result.rows.length === 0)
        throw new Error(`No user found with email: ${email}`);
    const userId = result.rows[0].userid;

    const query2 = 'SELECT * FROM collaborators WHERE scriptid = $1 AND userid = $2';
    const values2 = [scriptid, userId];
    const result2 = await client.query(query2, values2);
    if (result2.rows.length !== 0)
        throw new Error(`User is already a collaborator.`);

    const query3 = "SELECT * FROM scripts WHERE scriptid = $1";
    const values3 = [scriptid];
    const result3 = await client.query(query3, values3);
    if (result3.rows.length === 0)
        throw new Error(`No script found with scriptid: ${scriptid}`);
    const script = result3.rows[0];
    if(script.userid === userId)
        throw new Error(`User is already the owner of this script.`);

    const query4 = 'INSERT INTO collaborators(scriptid, userid) VALUES($1, $2) RETURNING *';
    const values4 = [scriptid, userId];
    await client.query(query4, values4);
    client.release();
    return true;
}

const removeCollaborator = async (_, { scriptid, email }) => { 
    const client = await pool.connect();
    const query = 'SELECT userid FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    if (result.rows.length === 0)
        throw new Error(`No user found with email: ${email}`);
    const userId = result.rows[0].userid;

    const query2 = 'SELECT * FROM collaborators WHERE scriptid = $1 AND userid = $2';
    const values2 = [scriptid, userId];
    const result2 = await client.query(query2, values2);
    if (result2.rows.length === 0)
        throw new Error(`User is not a collaborator.`);

    const query3 = 'DELETE FROM collaborators WHERE scriptid = $1 AND userid = $2';
    const values3 = [scriptid, userId];
    await client.query(query3, values3);
    client.release();
    return true;
}

module.exports = {
    createScript,
    deleteScript,
    updateScript,
    addCollaborator,
    removeCollaborator
};