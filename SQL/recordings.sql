CREATE TABLE recordings (
    RecordingId SERIAL PRIMARY KEY,
    ScriptId INT REFERENCES scripts(ScriptId),
    Time_Saved TIMESTAMP,
    S3Link VARCHAR
);