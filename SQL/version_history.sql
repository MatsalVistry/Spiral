CREATE TABLE version_history (
    VersionId SERIAL PRIMARY KEY,
    ScriptId INT REFERENCES scripts(ScriptId),
    Time_Saved TIMESTAMP,
    Title VARCHAR
);