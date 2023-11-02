CREATE TABLE comments (
    CommentId SERIAL PRIMARY KEY,
    ScriptId INT REFERENCES scripts(scriptid),
    userid INT REFERENCES users(userid),
    Time_Saved TIMESTAMP,
    Text_Content VARCHAR
);